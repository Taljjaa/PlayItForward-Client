// React imports
import React, { useState } from 'react';
import './NonprofitSearchFilter.scss';

// This functional component is the filter for searching events
// Layout:
// Form ( Input Row 1, Submit )
const NonprofitSearchFilter = () => {
  const [eventName, setEventName] = useState('');

  return (
    <div className="searchFilterContainer">
      {/* Form Start */}
      <form>
        {/* Input Row 1 */}
        <div className="inputContainer">
          <div>
            <label className="nonprofitText">Nonprofit Search</label>
            <input
              className="inputRow"
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
        <div className="searchButtonContainer">
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default NonprofitSearchFilter;
