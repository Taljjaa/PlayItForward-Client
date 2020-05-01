// React imports
import React from 'react';

// Custom imports
import NonprofitCard from './NonprofitCard';
import { nonprofitData } from '../pages/mock-data';

// This functional component holds a collection of nonprofit cards
// Layout:
// Nonprofit Cards
const NonprofitCardCollection = () => {
  return (
    <div className="flex flex-col flex-grow items-center w-full overflow-auto">
      {nonprofitData.nonprofits.map(el => {
        return <NonprofitCard key={Math.random()} data={el} />;
      })}
    </div>
  );
};

export default NonprofitCardCollection;
