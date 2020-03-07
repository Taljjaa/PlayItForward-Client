// React Imports
import React from "react";

// Custom Imports
import EventCard from "./EventCard";

// This component holds multiple Event Cards accessible through scrolling
// Layout:
// List of Events
const EventCardCollection = props => {
  // THIS IS PLACEHOLDER DATA TO STAND IN FOR PROPS
  const propSample = {
    data: {
      events: [
        {
          id: 1,
          title: "Volunteering Event Title",
          date: "2020-03-28",
          address: "1234 Somewhere St, Seattle, WA, 98177",
          nonprofit: {
            displayName: "Play It Forward",
            logo: "Insert url here"
          }
        },
        {
          id: 2,
          title: "Volunteering Event Title",
          date: "2020-04-22",
          address: "5678 Somewhere St, Seattle, WA, 98177",
          nonprofit: {
            displayName: "Play It Backward",
            logo: "Insert url here"
          }
        }
      ]
    }
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
