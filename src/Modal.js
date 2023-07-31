import React from 'react';

const Modal = ({ show, closeModal, message }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Modal;
