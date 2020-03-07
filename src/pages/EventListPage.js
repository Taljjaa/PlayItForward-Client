// React Imports
import React, { useState } from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventSearchFilter from "../components/EventSearchFilter";
import mockData from './mock-data'

// This is a functional component that displays the event list page
// Layout:
// Navbar, FilterBar, EventList
const EventListPage = () => {
  // State
  const [filter, setFilter] = useState({
    eventName: "",
    nonprofitName: "",
    dateStart: "",
    dateEnd: ""
  });



  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <EventSearchFilter setFilter={setFilter} />
      <div className="flex flex-col items-center w-screen flex-grow pt-2">
        <h1 className="font-bold text-xl pb-1">EVENTS LISTED</h1>
        {}
      </div>
    </div>
  );
};

export default EventListPage;
