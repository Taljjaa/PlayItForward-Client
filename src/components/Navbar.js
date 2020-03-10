// React Imports
import React, { useState } from "react";

// Custom Imports
import NavbarOptions from "./NavbarOptions";

// This is a dynamic navbar that expands to show links
// Layout:
// Header Links, Collapsible Menu Options
const Navbar = () => {
  // STATE: Whether menu options are visible or not
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  // METHOD: click handler for toggling menu visibility
  const onHamburgerClick = e => {
    setExpanded(!expanded);
  };

  // SVG Icon for collapsing menu
  const hamburgerCollapseIcon = (
    <svg
      className="h-6 w-6 fill-current text-red-500"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  );

  // SVG Icon for expanding menu
  const hamburgerExpandIcon = (
    <svg
      className="h-6 w-6 fill-current text-white"
      onClick={onHamburgerClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <header className="bg-gray-900">
      {/* Header Links */}
      <div className="flex flex-row items-center px-6 py-2">
        <NavbarOptions />
        <div className="flex justify-end w-full">
          {loggedIn ? (
            expanded ? (
              hamburgerCollapseIcon
            ) : (
              hamburgerExpandIcon
            )
          ) : (
            <a
              className="font-semibold rounded px-2 hover:bg-blue-700 text-blue-400 underline"
              href="#"
            >
              Login
            </a>
          )}
        </div>
      </div>

      {/* Collapsible Menu Options */}
      {/* Add ternary based on isExpanded that
          returns either a component (list) that
          uses absolute positioning or null*/}
    </header>
  );
};

export default Navbar;
