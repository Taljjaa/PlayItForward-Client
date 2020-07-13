import React, { useState, useCallback, useRef } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  ComboBox,
  ComboBoxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  Combobox,
  ComboboxInput,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { mapStyles } from '../media/mapStyles/mapStyles';

const CREATE_EVENT = gql`
  mutation createEvent(
    $title: String!
    $date: String!
    $file: Upload
    $location: String
    $nonprofitId: Int
  ) {
    createEvent(
      title: $title
      date: $date
      file: $file
      location: $location
      nonprofitId: $nonprofitId
    ) {
      id
    }
  }
`;

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 47.571537,
  lng: -122.33956,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const CreateEventPage = () => {
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const [selected, setSelected] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [createEvent] = useMutation(CREATE_EVENT);
  //call createEvent function and pass in parameters when ready to submit event
  //function will return id when done, can add more if needed

  const onMapClick = useCallback(e => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  }, []);

  if (loadError) return <p>Error Loading Maps</p>;
  if (!isLoaded) return <p>Loading</p>;

  return (
    <div>
      <Search panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}>
        <Marker
          key={Math.random()}
          position={marker}
          onClick={() => setSelected(marker)}
          // icon={
          //   {
          //   url: SOME IMAGE,
          //   scaledSize: new window.google.maps.Size(50, 50),
          //   origin: new window.google.maps.Point(0, 0),
          //   anchor: new window.google.maps.Point(25, 25),
          // }}
        />

        {selected ? (
          <InfoWindow position={marker} onCloseClick={() => setSelected(null)}>
            <div>
              <h2>Loc Info</h2>
              <p>{selected.lat}</p>
              <p>{selected.lng}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

const Search = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 47.571537,
        lng: () => -122.33956,
      },
      radius: 200 * 1000,
    },
  });

  return (
    <Combobox
      onSelect={async address => {
        setValue(address, false);
        clearSuggestions();

        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log('error!');
        }
      }}>
      <ComboboxInput
        input={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Enter Address"
      />
      <ComboboxPopover>
        {status === 'OK' &&
          data.map(({ id, description }) => (
            <ComboboxOption key={Math.random()} value={description} />
          ))}
      </ComboboxPopover>
    </Combobox>
  );
};

export default CreateEventPage;
