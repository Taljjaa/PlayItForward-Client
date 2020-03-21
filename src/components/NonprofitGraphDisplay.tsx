import React, { useState } from 'react';
import NonprofitGraph from './NonprofitGraph';

const NonprofitGraphDisplay = () => {
  const [displayOption, setDisplayOption] = useState('metrics');

  return (
    <div>
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
      <NonprofitGraph displayOption={displayOption} />
    </div>
  );
};

export default NonprofitGraphDisplay;
