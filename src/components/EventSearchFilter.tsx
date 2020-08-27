// React imports
import React, { useState } from 'react';
import './EventSearchFilter.scss';

// Form ( Input Row 1, Input Row 2, Submit )
const EventSearchFilter = () => {
  const [eventName, setEventName] = useState('');
  const [nonprofitName, setNonprofitName] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');

  return (
    <div className="searchFilterContainer">
      {/* Form Start */}
      <form>
        {/* Input Row 1 */}
        <div className="inputRow">
          <div>
            <label className="inputLabel">Event Name</label>
            <input
              className="inputBox"
              id="event-name"
              type="text"
              value={eventName}
              onChange={e => {
                setEventName(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="inputLabel">Nonprofit</label>
            <input
              className="inputBox"
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
        <div className="inputRow">
          <div>
            <label className="inputLabel">Start Date</label>
            <input
              className="inputBox"
              id="start-date"
              type="text"
              value={eventStartDate}
              onChange={e => {
                setEventStartDate(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="inputLabel">End Date</label>
            <input
              className="inputBox"
              id="end-date"
              type="text"
              value={eventEndDate}
              onChange={e => {
                setEventEndDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventSearchFilter;
