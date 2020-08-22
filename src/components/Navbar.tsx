import React, { useState, useEffect } from 'react';

import NavbarOptions from './NavbarOptions';
import DropdownOptions from './DropdownOptions';
import './NavBar.scss';

// Header Links, Collapsible Menu Options
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('volunteerId') ||
      localStorage.getItem('nonprofitId')
    ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  const onHamburgerClick = (e: any) => {
    setExpanded(!expanded);
  };

  // SVG Icon for collapsing menu
  const hamburgerCollapseIcon = (
    <svg
      className="hamburgerCollapseIcon"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  );

  // SVG Icon for expanding menu
  const hamburgerExpandIcon = (
    <svg
      className="hamburgerExpandIcon"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <header className="navBarHeader">
      {/* Header Links */}
      <div className="navBarOptions">
        <NavbarOptions />
        <div className="flexibleHamburgerOption">
          {loggedIn ? (
            expanded ? (
              hamburgerCollapseIcon
            ) : (
              hamburgerExpandIcon
            )
          ) : (
            <a className="loginOption" href="/auth">
              Login
            </a>
          )}
        </div>
      </div>

      {expanded ? <DropdownOptions /> : null}
      {/* Collapsible Menu Options */}
      {/* Add ternary based on isExpanded that
          returns either a component (list) that
          uses absolute positioning or null*/}
    </header>
  );
};

export default Navbar;
