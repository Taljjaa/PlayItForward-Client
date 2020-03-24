import React, { useState } from "react";

import LoginDialogueBox from "./LoginDialogueBox"
import SignUpDialogueBox from "./SignUpDialogueBox"

// ClickableTabs (x2), LoginBody || SignUpBody
const AuthWindow = () => {
  const [loginTabbed, setLoginTabbed] = useState(true);
  const [isVolunteer, setIsVolunteer] = useState(true);

  const tabHeaderClass = "flex text-white justify-center items-center w-6/12 h-12 ";
  const selected = "bg-blue-500";
  const unSelected = "bg-blue-600";

  return (
    <div className="auth-page-window flex flex-col h-80 w-9/12 bg-red-400">
      {/* Clickable Tabs */}
      <div className="flex">
        <div className={tabHeaderClass + (loginTabbed ? selected : unSelected)} onClick={() => setLoginTabbed(true)}>
          Login
        </div>
        <div className={tabHeaderClass + (loginTabbed ? unSelected : selected)} onClick={() => setLoginTabbed(false)}>
          Signup
        </div>
      </div>

      {/* LoginBody || SignUpBody */}
      {loginTabbed ? <LoginDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/> : <SignUpDialogueBox isVolunteer={isVolunteer} setIsVolunteer={setIsVolunteer}/>}
    </div>
  );
};

export default AuthWindow;
