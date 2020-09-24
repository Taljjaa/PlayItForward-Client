// React imports
import React from 'react';

// Custom imports
import Navbar from '../../components/Navbar/Navbar';
import NonprofitSearchFilter from '../../components/Nonprofit/NonprofitSearchFilter';
import NonprofitCardCollection from '../../components/Nonprofit/NonprofitCardCollection';
import './NonprofitListPage.scss';

// Function component for the nonprofit list page
// Layout
// Navbar, NonprofitSearchFilter, NonprofitCardCollection
const NonprofitListPage = () => {
  return (
    <div className="nonprofitListPageContainer ">
      <Navbar />
      <NonprofitSearchFilter />
      <NonprofitCardCollection />
    </div>
  );
};

export default NonprofitListPage;
