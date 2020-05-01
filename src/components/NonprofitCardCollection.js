// React imports
import React from 'react';

// Custom imports
import NonprofitCard from './NonprofitCard';
import { nonprofitData } from '../pages/mock-data';

//GraphQL imports
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_ALL_NONPROFITS = gql`
  query getNonprofits {
    getNonprofits {
      id
      username
    }
  }
`;

// This functional component holds a collection of nonprofit cards
// Layout:
// Nonprofit Cards
const NonprofitCardCollection = props => {
  const { loading, error, data } = useQuery(GET_ALL_NONPROFITS);
  if (loading) {
    return null;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="flex flex-col flex-grow items-center w-full overflow-auto">
      {nonprofitData.nonprofits.map(el => {
        return <NonprofitCard key={Math.random()} data={el} />;
      })}
    </div>
  );
};

export default NonprofitCardCollection;
