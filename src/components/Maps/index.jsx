import React, { Component, useState } from "react";
import { YMaps, Map, ZoomControl, Placemark } from "react-yandex-maps";
import PlusIcon from "./../../assets/PlusIcon.svg";

const Maps = () => {
  const map = React.createRef();
  const ymaps = React.createRef();

  const [coordinates, setCoordinates] = useState([]);

  const addSearchControlEvents = () => {
    const currentMap = map.current;
    const currentYmaps = ymaps.current;

    const searchControl = new currentYmaps.control.SearchControl({
      options: {
        display: "none",
      },
    });
    searchControl.search("Сочи").then(() => {
      const geoObjectsArray = searchControl.getResultsArray();
      if (geoObjectsArray.length) {
        const coords = geoObjectsArray[0].geometry._coordinates;
        currentMap.setCenter([...coords], 11);
        setCoordinates(coords);
      }
    });

    currentMap.controls.add(searchControl);

    // const searchCoords =
    //   searchControl.getResponseMetaData().SearchResponse.Point.coordinates;
    // const display = searchControl.getResponseMetaData().SearchResponse.display;

    // if (display && display === "multiple") {
    //   currentMap.setCenter([searchCoords[1], searchCoords[0]], 11);
    // }

    // searchControl.events.add("resultselect", function (e) {
    //   const searchCoords =
    //     searchControl.getResponseMetaData().SearchResponse.Point.coordinates;
    //   const display =
    //     searchControl.getResponseMetaData().SearchResponse.display;

    //   if (display && display === "multiple") {
    //     currentMap.setCenter([searchCoords[1], searchCoords[0]], 11);
    //   }
    // });
  };

  return (
    <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
      <Map
        state={{ center: [55.76, 37.64], zoom: 10 }}
        instanceRef={map}
        onLoad={(ymapsInstance) => {
          ymaps.current = ymapsInstance;
          addSearchControlEvents();
        }}
        width="100%"
        height="400px"
        modules={["control.SearchControl"]}
      >
        <ZoomControl
          options={{ float: "none", position: { top: 100, right: 10 } }}
        />
        <Placemark
          geometry={coordinates}
          options={{
            iconLayout: "default#image",
            iconImageHref: PlusIcon,
            iconImageSize: [100, 36],
            iconImageOffset: [-50, -18],
          }}
        />
      </Map>
    </YMaps>
  );
};
export default Maps;
