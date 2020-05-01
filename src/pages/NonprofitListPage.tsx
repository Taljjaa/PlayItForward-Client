// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar';
import NonprofitSearchFilter from '../components/NonprofitSearchFilter';
import NonprofitCardCollection from '../components/NonprofitCardCollection';

// Function component for the nonprofit list page
// Layout
// Navbar, NonprofitSearchFilter, NonprofitCardCollection
const NonprofitListPage = () => {
  return (
    <div className="nonprofit-list-pg flex flex-col w-screen h-screen">
      <Navbar />
      <NonprofitSearchFilter />
      <NonprofitCardCollection />
    </div>
  );
};

export default NonprofitListPage;
