// React imports
import React, { useState } from 'react';

// This functional component is the filter for searching events
// Layout:
// ... TBD
const EventSearchFilter = (props) => {
    
    const [eventName, setEventName] = useState('')
    const [nonprofitName, setNonprofitName] = useState('')
    const [eventStartDate, setEventStartDate] = useState('')
    const [eventEndDate, setEventEndDate] = useState('')

    return (
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default EventSearchFilter;