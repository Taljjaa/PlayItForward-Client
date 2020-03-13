// React Imports
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Custom Imports
import EventCard from './EventCard';
import notFoundGif from '../media/animations/event-not-found.gif';

// This component holds multiple Event Cards accessible through scrolling
// Layout:
// List of Events

// interface Event {
//   id: number,
//   image: string,
//   title: string,
//   date: string,
//   location: string,

// }

//graphql query object limit 3 returns 3 events
const GET_THREE_EVENTS = gql`
  query getThreeEvents {
    event(limit: 3) {
      image
      id
      title
      date
      location
      nonprofit {
        display_name
        logo
      }
    }
  }
`;

const EventCardCollection = () => {
  //useQuery hook takes our gql query and makes a request to the backend
  //the return value is held in data
  const { loading, error, data } = useQuery(GET_THREE_EVENTS);
  if (loading) return null;
  return (
    <div>
      {!error ? (
        <div className="event-list-pg-events-container flex justify-center items-center">
          <div className="flex flex-col items-center w-screen pb-4">
            {/* List Of Events from Props */}
            {data.event.map(event => {
              return <EventCard event={event} key={event.id} />;
            })}
          </div>
        </div>
      ) : (
        <div className="event-list-page-image-container flex justify-center items-center">
          <div className="event-list-page-image-container flex flex-col justify-center items-center">
            <img className="h-64" src={notFoundGif} alt="" />
            <h2 className="block font-bold text-lg">
              Oops! Couldn't Find Any Events!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCardCollection;
