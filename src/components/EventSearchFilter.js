// React imports
import React, { useState } from "react";

// This functional component is the filter for searching events
// Layout:
// Form ( Input Row 1, Input Row 2, Submit )
const EventSearchFilter = props => {
  const [eventName, setEventName] = useState("");
  const [nonprofitName, setNonprofitName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  return (
    <div className="bg-blue-300 rounded-lg mx-2 my-2 px-4 pb-2 shadow-lg">
      {/* Form Start */}
      <form>
        {/* Input Row 1 */}
        <div className="flex flex-row justify-between pb-1">
          <div>
            <label className="block text-blue-800 pl-1" for="inline-full-name">
              Event Name
            </label>
            <input
              className="bg-gray-200 appearance-none rounded pl-1"
              id="event-name"
              type="text"
              value={eventName}
              onChange={e => {
                setEventName(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="block text-blue-800 pl-1" for="inline-full-name">
              Nonprofit
            </label>
            <input
              className="bg-gray-200 appearance-none rounded pl-1"
              id="nonprofit"
              type="text"
              value={nonprofitName}
              onChange={e => {
                setNonprofitName(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Input Row 2 */}
        <div className="flex flex-row justify-between">
          <div>
            <label className="block text-blue-800 pl-1" for="inline-full-name">
              Start Date
            </label>
            <input
              className="bg-gray-200 appearance-none rounded pl-1"
              id="start-date"
              type="text"
              value={eventStartDate}
              onChange={e => {
                setEventStartDate(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="block text-blue-800 pl-1" for="inline-full-name">
              End Date
            </label>
            <input
              className="bg-gray-200 appearance-none rounded pl-1"
              id="end-date"
              type="text"
              value={eventEndDate}
              onChange={e => {
                setEventEndDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center pt-2">
          <button
            className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventSearchFilter;
