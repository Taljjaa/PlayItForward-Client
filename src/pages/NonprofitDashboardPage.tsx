import React from 'react';
import NavBar from '../components/Navbar';
import NonprofitGraphDisplay from '../components/NonprofitGraphDisplay';
import pifLogo from '../media/images/pif-logo.png';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { getNonprofit } from '../generated/getNonprofit';

const GET_NONPROFIT = gql`
  query getNonprofit($id: Int!) {
    getNonprofit(id: $id) {
      displayName
      logo
      events {
        id
        title
        location
        date
        volunteers {
          id
        }
      }
    }
  }
`;

const NonprofitDashboardPage = () => {
  const nonprofitId = parseInt(localStorage.getItem('nonprofitId')!);

  const { loading, data } = useQuery<getNonprofit>(GET_NONPROFIT, {
    variables: {
      id: nonprofitId,
    },
  });

  console.log(data);

  if (loading || !data) {
    return null;
  }

  const { displayName, logo } = data.getNonprofit;

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <div className="flex justify-center items-center h-full w-3/12">
            <p>{displayName}</p>
            <img src={logo} alt={`${displayName} logo`} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-center items-center w-full h-24">
              <h1 className="text-6xl">What Would You Like To Do?</h1>
            </div>
            <div className="flex w-full flex-1 justify-center items-center">
              {/* create event */}
              <Link to="/create-event">
                <img src={pifLogo} />
              </Link>
              {/* edit account button */}
              <button>Insert Edit Account Button</button>
            </div>
          </div>
        </div>
        <NonprofitGraphDisplay />
      </div>
    </div>
  );
};

export default NonprofitDashboardPage;
