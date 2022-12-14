import "./style.css";
import React from "react";
import { GoogleMap, LoadScript, OverlayView, Marker } from "react-google-maps";

const DOTS = 100; // Dots wont initial render until you change this

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  return (
    <LoadScript id="script-loader" googleMapsApiKey="">
      <div className="map">
        <GoogleMap
          options={{
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
          mapContainerClassName="map-map"
          center={center}
          zoom={10}
        >
          {[...Array(DOTS)].map((_, i) => (
            <OverlayView
              key={i}
              getPixelPositionOffset={(width, height) => ({
                x: -(width / 2),
                y: -height,
              })}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              position={{ lat: 52 + Math.random(), lng: 13 + Math.random() }}
            >
              <img
                id={`yellow-dot-${i}`}
                alt="yellow-dot"
                src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
              />
            </OverlayView>
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};
export default Map;
