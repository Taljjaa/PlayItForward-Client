// React Imports
import React from "react";

// Custom Imports
import EventCard from "./EventCard";
import notFoundGif from "../media/animations/event-not-found.gif";
import { eventData } from "../pages/mock-data";

// This component holds multiple Event Cards accessible through scrolling
// Layout:
// List of Events
const EventCardCollection = props => {
  return (
    <div>
      {eventData.length !== 0 ? (
        <div className="event-list-pg-events-container flex justify-center items-center">
          <div className="flex flex-col items-center w-screen overflow-x-scroll pb-4">
            {/* List Of Events from Props */}
            {eventData.events.map(event => {
              return <EventCard event={event} key={event.id} />;
            })}
          </div>{" "}
        </div>
      ) : (
        <div className="event-list-page-image-container flex justify-center items-center">
          <div className="event-list-page-image-container flex flex-col justify-center items-center">
            <img className="h-64" src={notFoundGif} alt="" />
            <h2 className="block font-bold text-lg">
              Oops! Couldn't Find Any Events!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCardCollection;
