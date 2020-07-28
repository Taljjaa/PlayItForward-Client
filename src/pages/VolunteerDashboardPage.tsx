import React from 'react';
import NavBar from '../components/Navbar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import VolunteerGraphDisplay from '../components/VolunteerGraphDisplay';
import { getVolunteer } from '../generated/getVolunteer';

//graphql query object returns logged in volunteer based on localStorage
const GET_VOLUNTEER = gql`
  query getVolunteer($id: Int!) {
    getVolunteer(id: $id) {
      username
    }
  }
`;

const VolunteerDashboardPage = () => {
  const volunteerId = parseInt(localStorage.getItem('volunteerId')!);

  const { data } = useQuery<getVolunteer>(GET_VOLUNTEER, {
    variables: {
      id: volunteerId,
    },
  });

  console.log(data);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <div className="flex justify-center items-center h-full w-3/12 bg-blue-400">
            <div className="ml-12 w-96 h-96 bg-blue-500">Some Picture</div>
          </div>
          <div className="flex flex-col flex-1 bg-blue-500">
            <div className="flex justify-center items-center w-full h-24 bg-blue-400">
              <h1 className="text-6xl">What Would You Like To Do?</h1>
            </div>
            <div className="flex w-full flex-1 bg-blue-400 justify-center items-center">
              <div className="mr-4 w-72 h-72 bg-blue-500">Some Picture</div>
              <div className="ml-4 w-72 h-72 bg-blue-500">Some Picture</div>
            </div>
          </div>
        </div>
        <VolunteerGraphDisplay />
      </div>
    </div>
  );
};

export default VolunteerDashboardPage;
