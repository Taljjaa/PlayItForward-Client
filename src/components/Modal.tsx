import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ isModalOpen, modalContent }: any) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  console.log(isModalOpen);
  return (
    isModalOpen ??
    createPortal(
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          padding: '100px',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <p
          style={{
            width: '50%',
            background: 'white',
            padding: '50px',
            textAlign: 'center',
          }}>
          Hi
        </p>
      </div>,
      // target container
      el,
    )
  );
};

export default Modal;
