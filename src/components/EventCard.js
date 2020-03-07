// React Imports
import React from "react";

// Custom Imports
import pifLogo from "../media/icons/pif-logo.png"; // PLACEHOLDER

// This is a re-usable Card component for event info
// Layout:
// Event Logo, Event Information
const EventCard = props => {

  return (
    <div className="flex flex-row justify-end mb-2">
      {/* Event Logo */}
      <div className="flex justify-center items-center bg-white h-24 w-24">
        <img src={pifLogo} alt=""/>
      </div>
      {/* Event Information */}
      <div className="flex flex-col pl-2 bg-blue-400 w-64 h-24">
        <h1 className="text-s">{props.event.nonprofit.displayName}</h1>
        <h1 className="text font-semibold">{props.event.title}</h1>
        <h1 className="text-s">{props.event.date}</h1>
        <h1 className="text-xs truncate">{props.event.address}</h1>
      </div>
    </div>
  );
};

export default EventCard;
