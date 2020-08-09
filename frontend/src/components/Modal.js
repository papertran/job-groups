import React, { useState } from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <p>PLACEHOLDER</p>
        </div>
    );
};

export default Modal;
