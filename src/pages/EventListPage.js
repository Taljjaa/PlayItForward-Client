// React Imports
import React, { useState } from "react";

// Custom Imports
import Navbar from "../components/Navbar";
import EventSearchFilter from "../components/EventSearchFilter"

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
})

    return (
        <div className="flex flex-col w-screen">
            <Navbar />
            <EventSearchFilter setFilter={setFilter}/>
        </div>
    );
};

export default EventListPage;