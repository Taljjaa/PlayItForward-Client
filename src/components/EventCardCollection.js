// React Imports
import React from "react";

// Custom Imports
import EventCard from "./EventCard";
import {data} from '../pages/mock-data'

// This component holds multiple Event Cards accessible through scrolling
// Layout:
// List of Events
const EventCardCollection = props => {
  // THIS IS PLACEHOLDER DATA TO STAND IN FOR PROPS
  const propSample = {
    data: data
  };

  return (
    <div className="flex flex-col items-center w-screen overflow-x-scroll pb-4">
      {propSample.data.events.map(event => {
          return <EventCard event={event} key={event.id}/>
      })}
    </div>
  );
};

export default EventCardCollection;
