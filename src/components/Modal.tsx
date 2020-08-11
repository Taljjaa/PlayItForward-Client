import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal')!;
const el = document.createElement('div');

const Modal = ({ isModalOpen, children, closeModal }: any) => {
  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isModalOpen &&
    createPortal(
      <div className="modalBackground">
        <div className="modalContent">
          <button onClick={closeModal} className="modalCloseButton">
            X
          </button>
          {children}
        </div>
      </div>,
      // target container
      el,
    )
  );
};

export default Modal;
