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
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4">
          Metrics
        </button>
        <button
          onClick={() => setDisplayOption('events')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4">
          Events
        </button>
        <button
          onClick={() => setDisplayOption('volunteers')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4">
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
