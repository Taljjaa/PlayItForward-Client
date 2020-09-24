import React, { useState } from 'react';

import LoginDialogueBox from './LoginDialogueBox';
import SignUpDialogueBox from './SignUpDialogueBox';
import './AuthWindow.scss';

// ClickableTabs (x2), LoginBody || SignUpBody
const AuthWindow = () => {
  const [loginTabbed, setLoginTabbed] = useState(true);
  const [isVolunteer, setIsVolunteer] = useState(true);

  return (
    <div className="authContainerWindow">
      {/* Clickable Tabs */}
      <div className="authWindowTabs">
        <button
          className={
            'authWindowButtons ' +
            (loginTabbed
              ? 'authWindowButtonSelected'
              : 'authWindowButtonUnselected')
          }
          onClick={() => setLoginTabbed(true)}>
          Login
        </button>
        <button
          className={
            'authWindowButtons ' +
            (loginTabbed
              ? 'authWindowButtonUnselected'
              : 'authWindowButtonSelected')
          }
          onClick={() => setLoginTabbed(false)}>
          Signup
        </button>
      </div>

      {/* LoginBody || SignUpBody */}
      {loginTabbed ? (
        <LoginDialogueBox
          isVolunteer={isVolunteer}
          setIsVolunteer={setIsVolunteer}
        />
      ) : (
        <SignUpDialogueBox
          isVolunteer={isVolunteer}
          setIsVolunteer={setIsVolunteer}
        />
      )}
    </div>
  );
};

export default AuthWindow;
