import closeButton from "../images/Close-Button.svg";
import React from "react";

function PopupWithForm({name, title, isOpen, onClose, buttonText, children}) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="button button_type_close" type="button" onClick={() => onClose()}><img
                    src={closeButton} alt="кнопка-крестик" /></button>

                <h2 className="popup__title">{title}</h2>

                <form className={`popup__form popup__form_${name}`} name={name} noValidate>
                    {children}
                </form>
                <button type="submit" className="submit button button_type_save button_type_save-edit">{buttonText}
                </button>
            </div>
        </div>
    );
}

export default PopupWithForm;
