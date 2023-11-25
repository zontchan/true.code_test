import React, {useContext} from 'react';
import {PopupContext} from "../App";
import PopupForm from "./PopupForm";

function Popup() {
    const {isPopupOpen, setIsPopupOpen} = useContext(PopupContext);
    const handleClose = (e) => {
        e.preventDefault();
        setIsPopupOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <div className={`popup ${isPopupOpen && 'active'}`}>
            <div className="container">
                <div className="popup__container">
                <div className="popup__body">
                    <h1>Бронирование билетов</h1>
                    <button className="popup__body-close-button button" onClick={(e) => handleClose(e)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.71429L1.71429 4.08718e-07L12 10.2857L10.2857 12L0 1.71429Z" fill="#D9D9D9"/>
                            <path d="M1.71429 12L0 10.2857L10.2857 0L12 1.71429L1.71429 12Z" fill="#D9D9D9"/>
                        </svg>
                    </button>
                    <PopupForm/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;