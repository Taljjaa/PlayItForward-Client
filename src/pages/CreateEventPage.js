import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  ComboBox,
  ComboBoxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import { mapStyles } from "../media/mapStyles/mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
};

const center = {
  lat: 47.571537,
  lng: -122.33956
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

const CreateEventPage = () => {
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const onMapClick = useCallback(e => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  if (loadError) return <p>Error Loading Maps</p>;
  if (!isLoaded) return <p>Loading</p>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Marker
          key={Math.random()}
          position={marker}
          // icon={
          //   {
          //   url: SOME IMAGE,
          //   scaledSize: new window.google.maps.Size(50, 50),
          //   origin: new window.google.maps.Point(0, 0),
          //   anchor: new window.google.maps.Point(25, 25),
          // }}
        />
      </GoogleMap>
    </div>
  );
};

export default CreateEventPage;
