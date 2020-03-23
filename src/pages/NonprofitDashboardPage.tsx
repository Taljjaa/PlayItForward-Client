import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import NavBar from '../components/Navbar';
import NonprofitGraphDisplay from '../components/NonprofitGraphDisplay';
import GifButton from '../components/GifButton';
import contributeImage from '../media/animations/contribute-piggy.gif';
import pifLogo from '../media/icons/pif-logo.png';

//file generated by running npm run apollo:generate, this looks at our graphql schema and creates types for typescript based on the schema
import { getNonprofitData } from '../generated/getNonprofitData';

//query to get nonprofit data currently set to only return the first nonprofit in the database
const GET_NONPROFIT_DATA = gql`
  query getNonprofitData {
    nonprofit(limit: 1) {
      display_name
      logo
      events {
        event_volunteers {
          id
        }
      }
    }
  }
`;

//this functional component renders the nonprofit dashboard
//Layout (from top --> bottom):
//Navbar, NonprofitInfo, Create Event Button, Edit Account Button, NonprofitDataGraph
const NonProfitDashboardPage = () => {
  const { loading, error, data } = useQuery<getNonprofitData>(
    GET_NONPROFIT_DATA,
  );

  if (loading || !data) return null;

  return (
    <div className="h-screen">
      {/* Navbar */}
      <NavBar />
      <div className="flex flex-col h-full">
        <div className="flex flex-1 items-center justify-around">
          <div className="flex flex-col">
            <div className="flex items-center justify-center bg-white rounded-t">
              <img src={pifLogo} alt="event image" className="h-40 w-40" />
            </div>
            <div className="bg-blue-700 text-white p-2 rounded-b flex items-center justify-center">
              {data.nonprofit[0]['display_name']}
            </div>
          </div>
          <div className="flex">
            {/* Create Event Button need to add an onclick that routes to create event page */}
            <GifButton image={contributeImage} caption="Create Event" />
            {/* Edit Account Button need to add an onclick that routes to edit account page? */}
            <GifButton image={contributeImage} caption="Edit Account" />
          </div>
        </div>
        <NonprofitGraphDisplay />
      </div>
    </div>
  );
};

export default NonProfitDashboardPage;
