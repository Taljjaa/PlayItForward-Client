import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CreateEventPage = () => {
  const [option, setOption] = useState("overview");
  const [eventDetails, setEventDetails] = useState({
    name: "",
    date: "",
    location: ""
  });

  const renderBody = (option: string) => {
    switch (option) {
      case "overview":
        return (
          <div className="flex w-full flex-1 bg-red-400">
            <div
              className="flex-1 bg-green-200"
              onClick={() => setOption("name")}
            >
              Set A Name
            </div>
            <div
              className="flex-1 bg-green-300"
              onClick={() => setOption("date")}
            >
              Set A Date
            </div>
            <div
              className="flex-1 bg-green-400"
              onClick={() => setOption("location")}
            >
              Set A Place
            </div>
          </div>
        );
        break;
      case "name":
        return (
          <div className="flex w-full flex-1 bg-red-400">
            <input
              className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
              placeholder="Enter Date"
            />
            <button onClick={() => setOption("overview")}>Back</button>
          </div>
        );
        break;
      case "date":
        return (
          <div className="flex w-full flex-1 bg-red-400">
            <input type="date" id="event-date" name="event-date" />
            <button onClick={() => setOption("overview")}>Back</button>
          </div>
        );
        break;
      case "location":
        return (
          <div className="flex w-full flex-1 bg-red-400">
            <button onClick={() => setOption("overview")}>Back</button>
          </div>
        );
        break;
      default:
        return (
          <div className="flex w-full flex-1 bg-red-400">
            <div className="flex-1 bg-green-200">Set A Name</div>
            <div className="flex-1 bg-green-300">Set A Date</div>
            <div className="flex-1 bg-green-400">Set A Place</div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-blue-400">
      <Navbar />
      <div className="flex flex-1 justify-center items-center bg-blue-400">
        <div className="flex flex-col w-176 h-112 bg-blue-600 p-2">
          <p className="text-center text-white font-semibold text-xl pb-4">
            Create An Event
          </p>
          {renderBody(option)}
          <button className="bg-blue-800 text-white">Create Event</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
