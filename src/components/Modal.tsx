import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const modalRoot = document.getElementById('modal');
const el = document.createElement('div');

const ADD_VOLUNTEER = gql`
  mutation addVolunteer($volunteerId: Int!, $eventId: Int!) {
    addVolunteer(volunteerId: $volunteerId, eventId: $eventId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const Modal = ({ isModalOpen, modalContent, closeModal }: any) => {
  const { title, location, date, nonprofit, id: eventId } = modalContent;

  const [addVolunteer] = useMutation(ADD_VOLUNTEER);

  const handleAttendClick = async () => {
    const volunteerId = parseInt(localStorage.getItem('volunteerId')!);
    let mutationResult = await addVolunteer({
      variables: {
        volunteerId,
        eventId,
      },
    });
    if (mutationResult.data.addVolunteer.ok) {
      closeModal();
      //add notfication of successful signup
    }
  };

  useEffect(() => {
    modalRoot!.appendChild(el);

    return () => {
      modalRoot!.removeChild(el);
    };
  }, [el]);

  return (
    isModalOpen &&
    createPortal(
      <div
        style={{
          zIndex: 99,
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          padding: '100px',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <div
          style={{
            width: '50%',
            background: 'white',
            padding: '50px',
            textAlign: 'center',
            margin: '0 auto',
            position: 'relative',
          }}>
          <button
            onClick={closeModal}
            style={{ position: 'absolute', top: 5, left: 10 }}>
            X
          </button>
          <p>
            {title} by {nonprofit['displayName']}
          </p>
          <p>{date}</p>
          <p>{location}</p>
          <button
            onClick={handleAttendClick}
            style={{
              position: 'absolute',
              bottom: 5,
              right: 10,
              color: 'white',
              background: '#2a4365',
              padding: '5px',
              borderRadius: '15px',
            }}>
            Attend
          </button>
        </div>
      </div>,
      // target container
      el,
    )
  );
};

export default Modal;
