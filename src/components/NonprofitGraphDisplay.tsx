import React, { useState } from 'react';
import NonprofitGraph from './NonprofitGraph';

const NonprofitGraphDisplay = () => {
  const [displayOption, setDisplayOption] = useState('metrics');

  return (
    <div className="flex bg-green-300">
      <div className="flex flex-col">
        <button
          onClick={() => setDisplayOption('metrics')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded">
          Metrics
        </button>
        <button
          onClick={() => setDisplayOption('events')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded">
          Events
        </button>
        <button
          onClick={() => setDisplayOption('volunteers')}
          type="button"
          className="shadow bg-blue-700 hover:bg-blue-600 focus:outline-none text-white font-bold py-1 px-4 rounded">
          Volunteers
        </button>
      </div>
      <div>
        <NonprofitGraph displayOption={displayOption} />
      </div>
    </div>
  );
};

export default NonprofitGraphDisplay;
