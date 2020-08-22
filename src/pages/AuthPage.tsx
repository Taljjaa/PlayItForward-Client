import React from 'react';

import Navbar from '../components/Navbar';
import AuthWindow from '../components/AuthWindow';
import './AuthPage.scss';

// Layout
// Navbar, AuthWindow
const AuthPage = () => {
  return (
    <div className="authPageBody">
      {/* Navbar */}
      <Navbar />

      <div className="authWindowContainer">
        {/* AuthWindow */}
        <AuthWindow />
      </div>
    </div>
  );
};

export default AuthPage;
