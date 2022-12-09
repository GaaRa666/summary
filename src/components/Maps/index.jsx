import React, { Component, useContext, useEffect, useState } from "react";
import { YMaps, Map, ZoomControl, Placemark } from "react-yandex-maps";
import { MainContext } from "../../pages/Main";

const Maps = ({ location }) => {
  const map = React.createRef();
  const ymaps = React.createRef();

  const [markerCoordinates, setCoordinates] = useState([]);

  const addSearchControlEvents = () => {
    const currentMap = map.current;
    const currentYmaps = ymaps.current;

    const searchControl = new currentYmaps.control.SearchControl({});
    searchControl.search(location).then(() => {
      const geoObjectsArray = searchControl.getResultsArray();
      if (geoObjectsArray.length) {
        const coords = geoObjectsArray[0].geometry._coordinates;
        currentMap.setCenter([...coords], 11);
        setCoordinates(coords);
      }
    });
  };

  return (
    <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
      <Map
        state={{ center: markerCoordinates, zoom: 10 }}
        instanceRef={map}
        onLoad={(ymapsInstance) => {
          ymaps.current = ymapsInstance;
          addSearchControlEvents();
        }}
        width="100%"
        height="200px"
        modules={["control.SearchControl"]}
      >
        <ZoomControl
          options={{ float: "none", position: { top: 100, right: 10 } }}
        />
        {markerCoordinates.length > 0 && (
          <Placemark geometry={markerCoordinates} />
        )}
      </Map>
    </YMaps>
  );
};
export default Maps;
