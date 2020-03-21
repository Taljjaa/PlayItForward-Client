//React imports
import React from 'react';

//custom imports
import NavBar from '../components/Navbar';

//this functional component renders the nonprofit dashboard
// Layout (from top --> bottom):
//Navbar, NonprofitInfo, Create Event Button, Edit Account Button, NonprofitDataGraph
const NonProfitDashboardPage = () => {
  return (
    <div className="bg-blue-300 h-screen">
      <NavBar />
      <button
        type="button"
        className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded">
        Create Event
      </button>
      <button
        type="button"
        className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded">
        Edit Account
      </button>
    </div>
  );
};

export default NonProfitDashboardPage;
