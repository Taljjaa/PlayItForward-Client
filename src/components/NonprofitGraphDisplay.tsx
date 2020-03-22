import React, { useState } from 'react';
import NonprofitGraph from './NonprofitGraph';

const NonprofitGraphDisplay = () => {
  const [displayOption, setDisplayOption] = useState('metrics');

  return (
    <div className="flex bg-white flex-1">
      <div className="flex flex-col">
        <button
          onClick={() => setDisplayOption('metrics')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-black">
          Metrics
        </button>
        <button
          onClick={() => setDisplayOption('events')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-black border-t-0 border-b-0">
          Events
        </button>
        <button
          onClick={() => setDisplayOption('volunteers')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-black">
          Volunteers
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <NonprofitGraph displayOption={displayOption} />
      </div>
    </div>
  );
};

export default NonprofitGraphDisplay;
