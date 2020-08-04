import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ isModalOpen, modalContent, closeModal }: any) => {
  const el = document.createElement('div');
  el.classList.add('sup');

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  console.log(isModalOpen);
  return (
    isModalOpen &&
    createPortal(
      <div
        id="findMe"
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
        <button onClick={closeModal}>X</button>
        <p
          style={{
            width: '50%',
            background: 'white',
            padding: '50px',
            textAlign: 'center',
          }}>
          {modalContent}
        </p>
      </div>,
      // target container
      el,
    )
  );
};

export default Modal;
