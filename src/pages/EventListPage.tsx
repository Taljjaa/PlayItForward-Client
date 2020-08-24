// React Imports
import React, { useState } from 'react';

// Custom Imports
import Navbar from '../components/Navbar';
import EventSearchFilter from '../components/EventSearchFilter';
import EventCardCollection from '../components/EventCardCollection';
import './EventListPage.scss';

// This is a functional component that displays the event list page
// Layout:
// Navbar, FilterBar, EventList
const EventListPage = () => {
  // State
  const [filter, setFilter] = useState({
    eventName: '',
    nonprofitName: '',
    dateStart: '',
    dateEnd: '',
  });

  return (
    <div className="flexColContainer">
      {/* Navbar */}
      <Navbar />

      {/* Event Search Filter */}
      <EventSearchFilter />

      {/* Event List */}
      <div className="eventListContainer">
        <h1 className="headerText">EVENTS LISTED</h1>
        <EventCardCollection />
      </div>
    </div>
  );
};

export default EventListPage;
