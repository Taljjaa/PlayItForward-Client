import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ isModalOpen, modalContent, closeModal }: any) => {
  const { title, location, date, nonprofit } = modalContent;

  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
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
            style={{ position: 'absolute', top: 5, right: 10 }}>
            X
          </button>
          <p>
            {title} by {nonprofit['displayName']}
          </p>
          <p>{date}</p>
          <p>{location}</p>
        </div>
      </div>,
      // target container
      el,
    )
  );
};

export default Modal;
