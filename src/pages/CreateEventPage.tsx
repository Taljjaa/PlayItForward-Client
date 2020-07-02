import React, { useState } from "react";

const CreateEventPage = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const createEvent = () => {
    // Add backend request logic here
    // Handle a bad request here
    // Add add routing logic here
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-around items-center h-full w-104 bg-red-400 px-4">
        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Event Name Here"
          value={eventName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist();
            setEventName(e.target.value);
          }}
        />

        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Date Here - MM/DD/YY"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist();
            setDate(e.target.value);
          }}
        />

        <input
          className="text-center w-full text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500"
          type="text"
          placeholder="Enter Event Location Here"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist();
            setLocation(e.target.value);
          }}
        />

        <button
          className="bg-blue-600 w-24 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 mb-2"
          onClick={() => createEvent()}
        >
          Register
        </button>
      </div>
      <div className="h-full flex bg-red-300"></div>
    </div>
  );
};

export default CreateEventPage;
