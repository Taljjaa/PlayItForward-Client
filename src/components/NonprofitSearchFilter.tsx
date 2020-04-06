// React imports
import React, { useState } from "react";

// This functional component is the filter for searching events
// Layout:
// Form ( Input Row 1, Submit )
const NonprofitSearchFilter = () => {
  const [eventName, setEventName] = useState("");

  return (
    <div className="bg-blue-300 rounded-lg mx-2 my-2 px-4 pb-2 shadow-lg w-104 self-center">
      {/* Form Start */}
      <form>
        {/* Input Row 1 */}
        <div className="flex flex-row w-full justify-center pb-1">
          <div>
            <label className="flex justify-center w-full font-bold text-xl text-blue-800 pl-1">
              Nonprofit Search
            </label>
            <input
              className="bg-gray-200 appearance-none focus:outline-none rounded pl-1"
              id="event-name"
              type="text"
              value={eventName}
              onChange={e => {
                setEventName(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Submit */}
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

export default NonprofitSearchFilter;
