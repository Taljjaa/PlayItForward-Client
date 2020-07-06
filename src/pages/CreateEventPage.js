import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import { mapStyles } from "../media/mapStyles/mapStyles";
import { assertTSPropertySignature } from "babel-types";

const CreateEventPage = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const createEvent = () => {
    // Add backend request logic here
    // Handle a bad request here
    // Add add routing logic here
  };

  const [marker, setMarker] = useState({});
  const onMapClick = React.useCallback(event => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }, []);

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
      <div className="flex flex-col justify-around items-center h-full w-104 px-4">
        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Event Name Here"
          value={eventName}
          onChange={e => {
            e.persist();
            setEventName(e.target.value);
          }}
        />

        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Date Here - MM/DD/YY"
          value={date}
          onChange={e => {
            e.persist();
            setDate(e.target.value);
          }}
        />

        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Event Location Here"
          value={location}
          onChange={e => {
            e.persist();
            setLocation(e.target.value);
          }}
        />

        <button
          className="bg-blue-600 w-24 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 mb-2"
          onClick={() => createEvent()}
        >
          Register
        </button>
      </div>
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
