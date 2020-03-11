// React Imports
import React, { useState } from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventSearchFilter from "../components/EventSearchFilter";
import EventCardCollection from "../components/EventCardCollection";

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
        <EventCardCollection />
      </div>
    </div>
  );
};

export default EventListPage;
