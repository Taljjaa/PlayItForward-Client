import React from "react";
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
import mapStyles from "../media/mapStyles/mapStyles";

const libraries = ["places"];

const CreateEventPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return <p>Error Loading Maps</p>;
  if (!isLoaded) return <p>Loading</p>;

  return <div>Map</div>;
};

export default CreateEventPage;
