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

  const tabHeaderClass = "flex text-white justify-center items-center w-6/12 h-12 ";
  const selected = "bg-blue-500";
  const unSelected = "bg-blue-600";

  return (
    <div className="auth-page-window flex flex-col h-80 w-9/12 bg-red-400">
      <div className="flex">
        <div className={tabHeaderClass + (loginTabbed ? selected : unSelected)}>
          Login
        </div>
        <div className={tabHeaderClass + (loginTabbed ? unSelected : selected)}>
          Signup
        </div>
      </div>
      {loginTabbed ? <LoginDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/> : <SignUpDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/>}
    </div>
  );
};

export default AuthWindow;