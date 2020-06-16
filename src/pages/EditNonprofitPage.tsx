import React from "react";
import NavBar from "../components/Navbar";
import pifLogo from "../media/icons/pif-logo.png";

const EditNonprofitPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />

      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Account Settings</h1>
        <div className="flex flex-col w-5/12 bg-blue-400 h-160 pt-8">
          <div className="flex flex-col self-center bg-red-400">
            <img className="h-56 w-56 mb-4" src={pifLogo} />
            <h1 className="text-center">Organization Photo</h1>
          </div>
          <div className="">
            <div className="flex flex-col">
              <input
                className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
                placeholder="Enter Username"
              />
              <input
                className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2"
                type="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EditNonprofitPage;
