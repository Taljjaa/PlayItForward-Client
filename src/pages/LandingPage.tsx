// React Imports
import React from 'react';

// Custom Imports
import Navbar from '../components/Navbar';
import EventCardCollection from '../components/EventCardCollection';
import trophyGif from '../media/animations/trophy-rotate.gif';
import './LandingPage.scss';
// This functional component renders the landing page
// Layout (from top --> bottom):
// Navbar, Logo, Upcoming Events
const LandingPage = () => {
  return (
    <div className="columnFlexBox">
      {/* Navbar */}
      <Navbar />

      {/* Logo */}
      <div className="trophyLogo">
        <img
          src={trophyGif}
          alt="gif of trophy spinning with the play it forward logo"
        />
      </div>

      <h1 className="motto">MAKE A DIFFERENCE</h1>

      {/* Upcoming Events */}
      <div className="landingPageEventCollection">
        <h2>UPCOMING EVENTS</h2>
        <EventCardCollection />
      </div>
    </div>
  );
};

export default LandingPage;
