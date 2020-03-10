// React Imports
import React, { useState } from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventSearchFilter from "../components/EventSearchFilter";
import EventCardCollection from "../components/EventCardCollection";
import notFoundGif from "../media/animations/event-not-found.gif";
import { data } from "./mock-data";
import pifLogo from "../media/icons/pif-logo.png";

// This is a functional component that displays the event list page
// Layout:
// Navbar, FilterBar, EventList
const EventListPage = props => {
  // State
  const [filter, setFilter] = useState({
    eventName: "",
    nonprofitName: "",
    dateStart: "",
    dateEnd: ""
  });

  // THIS IS MOCK DATA, TO BE REMOVED
  const fetchStateSample = {
    data: data
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Event Search Filter */}
      <EventSearchFilter setFilter={setFilter} />

      {/* Event List */}
      <div className="event-list-pg flex flex-col items-center w-screen h-full overflow-scroll">
        <h1 className="event-list-pg-header font-bold text-xl">
          EVENTS LISTED
        </h1>
        {Object.keys(fetchStateSample).length !== 0 ? (
          <div className="event-list-pg-events-container flex justify-center items-center">
            <EventCardCollection />
          </div>
        ) : (
          <div className="event-list-page-image-container flex flex-col justify-center items-center">
            <img className="h-64" src={notFoundGif} alt="" />
            <h2 className="block font-bold text-lg">
              Oops! Couldn't Find Any Events!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListPage;
