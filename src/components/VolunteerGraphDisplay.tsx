import React, { useState } from "react";
import VolunteerGraph from "./VolunteerGraph";

type DisplayOption = "history" | "events" | "nonprofits";

const VolunteerGraphDisplay = () => {
  const [displayOption, setDisplayOption] = useState<DisplayOption>("history");

  return (
    <div className="flex flex-1 border-t border-blue-900">
      <div className="flex flex-col h-full">
        <button
          onClick={() => setDisplayOption("history")}
          type="button"
          className="flex-1 shadow  hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900 border-t-0"
        >
          History
        </button>
        <button
          onClick={() => setDisplayOption("events")}
          type="button"
          className="flex-1 shadow  hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900 border-t-0 border-b-0"
        >
          Events
        </button>
        <button
          onClick={() => setDisplayOption("nonprofits")}
          type="button"
          className="flex-1 shadow  hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900"
        >
          Nonprofits
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <VolunteerGraph displayOption={displayOption} />
      </div>
    </div>
  );
};

export default VolunteerGraphDisplay;
