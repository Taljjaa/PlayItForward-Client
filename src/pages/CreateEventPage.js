import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

import { mapStyles } from "../media/mapStyles/mapStyles";
import { assertTSPropertySignature } from "babel-types";

const CreateEventPage = () => {
  const [marker, setMarker] = useState({});
  const onMapClick = React.useCallback(event => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestion
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 47.67805,
        lng: () => -122.338482
      },
      radius: 200 * 1000
    }
  });

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  });

  const libraries = ["places"];
  const mapContainerStyle = {
    height: "100vh",
    width: "100%"
  };

  const center = {
    lat: 47.67805,
    lng: -122.338482
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: assertTSPropertySignature,
    zoomControl: true
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return null;
  if (!isLoaded) return null;

  return (
    <div className="flex h-screen">
      <div className="h-full w-full">
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
          onClick={event => onMapClick(event)}
          onLoad={onMapLoad}
        >
          <Marker
            key={Math.random()}
            position={{ lat: marker.lat, lng: marker.lng }}
            // icon= {{
            //   url: 'directory/',
            //   scaledSize: new window.google.maps.Size(30, 30),
            //   origin: new window.google.maps.Point(0,0),
            //   anchor: new window.google.maps.Point(15, 15)

            // }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default CreateEventPage;
