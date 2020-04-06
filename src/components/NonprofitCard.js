// React imports
import React from "react";

// interface Props {
//   data: {
  
  
  //}
// }

// const EventCard = ({ event }: Props) => {

// Custom imports
import pifLogo from "../media/icons/pif-logo.png"; // PLACEHOLDER

// This is a functional card component for displaying nonprofit info
// LAYOUT
// Nonprofit Logo, Nonprofit information
const NonprofitCard = props => {
  return (
    <div className="flex flex-row justify-end pb-2">
      {/* Nonprofit Logo */}
      <div className="flex justify-center items-center bg-white h-24 w-24">
        <img src={pifLogo} alt="" />
      </div>
      {/* Nonprofit Information */}
      <div className="flex flex-col pl-2 bg-blue-400 w-64 h-24">
        <h1 className="text-s font-bold">{props.data.displayName}</h1>
        <h1 className="text-xs">{props.data.mission}</h1>
      </div>
    </div>
  );
};

export default NonprofitCard;
