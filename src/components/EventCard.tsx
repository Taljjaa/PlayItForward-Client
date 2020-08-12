import React from 'react';
// Custom Imports types, generated from graphql schema
import { getEvents_getEvents } from '../generated/getEvents';
import './EventCard.scss';

// This is a re-usable Card component for event info
// Layout:
// Event Logo, Event Information

interface Props {
  event: getEvents_getEvents;
  addModalContent: (id: number) => void;
  toggleModal: () => void;
}

const EventCard = ({ event, addModalContent, toggleModal }: Props) => {
  const { title, location, date, nonprofit, image, id } = event;

  const handleModal = () => {
    addModalContent(id);
    toggleModal();
  };

  return (
    <div onClick={handleModal} className="flexBoxContainer">
      {/* Event Logo */}
      <div className="imageFlexBox">
        <img src={image} alt="event" />
      </div>
      {/* Event Information */}
      <div className="eventCardInfo">
        <h1>{nonprofit['displayName']}</h1>
        <h1 className="eventTitle">{title}</h1>
        <h1>{date}</h1>
        <h1>{location}</h1>
      </div>
    </div>
  );
};

export default EventCard;
