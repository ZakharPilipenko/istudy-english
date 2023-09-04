import React from 'react';

const Modal = ({children}) => {

    return (
      <div className="modalGame">
        <div className="modalGame-box">
          {children}
        </div>
      </div>
    );
  }

export default Modal;