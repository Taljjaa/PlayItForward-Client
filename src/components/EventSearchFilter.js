// React imports
import React, { useState } from "react";

// This functional component is the filter for searching events
// Layout:
// ... TBD
const EventSearchFilter = props => {
  const [eventName, setEventName] = useState("");
  const [nonprofitName, setNonprofitName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  return (
    <div className="bg-blue-300 w-screen px-6 pb-2">
      <form>
        <div className="flex flex-row justify-between pb-1">
          <div>
            <label className="block text-blue-800" for="inline-full-name">
              Event Name
            </label>
            <input
              className="bg-gray-200 appearance-none rounded"
              id="event-name"
              type="text"
              value={eventName}
            />
          </div>
          <div>
            <label className="block text-blue-800" for="inline-full-name">
              Nonprofit
            </label>
            <input
              className="bg-gray-200 appearance-none rounded"
              id="nonprofit"
              type="text"
              value={nonprofitName}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
        <div>
            <label className="block text-blue-800" for="inline-full-name">
              Start Date
            </label>
            <input
              className="bg-gray-200 appearance-none rounded"
              id="start-date"
              type="text"
              value={eventStartDate}
            />
          </div>
          <div>
            <label className="block text-blue-800" for="inline-full-name">
              End Date
            </label>
            <input
              className="bg-gray-200 appearance-none rounded"
              id="end-date"
              type="text"
              value={eventEndDate}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventSearchFilter;
