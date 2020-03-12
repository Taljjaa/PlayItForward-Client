// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar'
import NonprofitGrid from '../components/NonprofitGrid'

const NonprofitListPage = () => {
    return (
        <div className="nonprofit-list-pg flex flex-col w-screen h-screen">
            <Navbar />
            <NonprofitGrid />
        </div>
    );
};

export default NonprofitListPage;