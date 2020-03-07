// React Imports
import React, { useState } from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventSearchFilter from "../components/EventSearchFilter";
import EventCardCollection from "../components/EventCardCollection";
import { data } from "./mock-data";
import pifLogo from "../media/icons/pif-logo.png";

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

  const fetchStateSample = {
    data: data
  };

  console.log(Object.keys(fetchStateSample).length);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Event Search Filter */}
      <EventSearchFilter setFilter={setFilter} />

      {/* Event List */}
      <div className="flex flex-col items-center w-screen h-full overflow-scroll">
        <h1 className="font-bold text-xl">EVENTS LISTED</h1>
        {Object.keys(fetchStateSample).length !== 0 ? (
          <div className="flex justify-center items-center">
            <EventCardCollection />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <img className="h-64" src={pifLogo} alt=""/>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListPage;
