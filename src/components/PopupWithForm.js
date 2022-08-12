import closeButton from "../images/Close-Button.svg";

function PopupWithForm({name, title, isOpen, onClose, children}) {
    function handleOverlayClick(evt) {
        if (evt.target===evt.currentTarget) {onClose()};
    }
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`} onClick={handleOverlayClick}>
            <div className="popup__container">
                <button className="button button_type_close" type="button" onClick={() => onClose()}><img
                    src={closeButton} alt="кнопка-крестик" /></button>

                <h2 className="popup__title">{title}</h2>

                <form className={`popup__form popup__form_${name}`} name={name}>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
