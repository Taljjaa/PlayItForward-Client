// React imports
import React, { useState } from "react";

// Custom imports
import LoginDialogueBox from "./LoginDialogueBox"
import SignUpDialogueBox from "./SignUpDialogueBox"
// This is a functional component that holds the dialogue options for signup/login
// Layout
// ClickableTab (x2), LoginBody || SignUpBody
const AuthWindow = () => {
  const [loginTabbed, setLoginTabbed] = useState(true);
  const [isVolunteer, setIsVolunteer] = useState(true);

  return (
    <div className="auth-page-window flex flex-col h-80 w-9/12 bg-red-400">
      <div className="flex">
        <div className="flex justify-center items-center bg-green-300 w-6/12 h-12">
          Login
        </div>
        <div className="flex justify-center items-center bg-yellow-400 w-6/12 h-12">
          Signup
        </div>
      </div>
      {loginTabbed ? <LoginDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/> : <SignUpDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/>}
    </div>
  );
};

export default AuthWindow;
