// React imports
import React from 'react';
import './NavbarOptions.scss';
// This functional component renders the options for the burger menu
// Layout:
// Links (x4)
const NavbarOptions = () => {
  return (
    <div className="navBarOptionsContainer">
      <a className="navBarOption" href="/">
        Home
      </a>
      <a className="navBarOption" href="/about">
        About
      </a>
      <a className="navBarOption" href="/events">
        Events
      </a>
      <a className="navBarOption" href="/nonprofits">
        Nonprofits
      </a>
    </div>
  );
};

export default NavbarOptions;
