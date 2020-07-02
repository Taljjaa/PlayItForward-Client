import React from "react";
import NavBar from "../components/Navbar";
import NonprofitGraphDisplay from "../components/NonprofitGraphDisplay";
import CustomButton from "../components/CustomButton";
import { imageRoster } from "../media/images/imageRoster";
import { useHistory } from "react-router-dom";

const NonprofitDashboardPage = () => {
  let history = useHistory();

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <div className="flex justify-center items-center h-full w-3/12 bg-blue-400">
            <div className="ml-12 w-96 h-96 bg-blue-500">Some Picture</div>
          </div>
          <div className="flex flex-col flex-1 bg-blue-500">
            <div className="flex justify-center items-center w-full h-24 bg-blue-400">
              <h1 className="text-6xl">What Would You Like To Do?</h1>
            </div>
            <div className="flex w-full flex-1 bg-blue-400 justify-center items-center">
              {/* create event */}
              <CustomButton
                buttonImages={imageRoster.buttons.newEvent}
                style="h-40 w-40"
                eventHandler={() => {
                  console.log("Yerp");
                }}
              />
              {/* edit account button */}
              <CustomButton
                buttonImages={imageRoster.buttons.newEvent}
                style="h-40 w-40"
                eventHandler={() => {
                  console.log("Yerp");
                }}
              />
            </div>
          </div>
        </div>
        <NonprofitGraphDisplay />
      </div>
    </div>
  );
};

export default NonprofitDashboardPage;
