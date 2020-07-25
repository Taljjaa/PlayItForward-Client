import React from 'react';
import NavBar from '../components/Navbar';
import NonprofitGraphDisplay from '../components/NonprofitGraphDisplay';
import CustomButton from '../components/CustomButton';
import { imageRoster } from '../media/images/imageRoster';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const nonprofitId = parseInt(localStorage.getItem('nonprofitId')!);

  const { error, data } = useQuery<getNonprofit>(GET_NONPROFIT, {
    variables: {
      id: nonprofitId,
    },
  });

  console.log(data);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <div className="flex justify-center items-center h-full w-3/12">
            <div className="ml-12 w-96 h-96">Some Picture</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-center items-center w-full h-24">
              <h1 className="text-6xl">What Would You Like To Do?</h1>
            </div>
            <div className="flex w-full flex-1 justify-center items-center">
              {/* create event */}
              <CustomButton
                buttonImages={imageRoster.buttons.newEvent}
                style="h-40 w-40"
                eventHandler={() => {
                  history.push('/create-event');
                }}
              />
              {/* edit account button */}
              <CustomButton
                buttonImages={imageRoster.buttons.newEvent}
                style="h-40 w-40"
                eventHandler={() => {
                  console.log('Yerp');
                }}
              />
            </div>
          </div>
        </div>
        <NonprofitGraphDisplay />
      </div>
    </div>
  );
};

export default NonprofitDashboardPage;
