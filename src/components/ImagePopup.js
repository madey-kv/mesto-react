import closeButton from "../images/Close-Button.svg";

function ImagePopup({card, onClose}) {
    function handleOverlayClick(evt) {
        if (evt.target===evt.currentTarget) {onClose()}
    }

    return (
        <div className={`popup popup__preview ${card.link && 'popup_opened'}`} onClick={handleOverlayClick}>
            <div className="popup__preview-container">
                <button type="button" className="button"><img src={closeButton} alt="кнопка-крестик" className="button button_type_close" onClick={() => onClose()} />
                </button>
                <img src={card.link} alt={card.name} className="popup__preview-photo"/>
                <p className="popup__preview-name">{card.name}</p>
            </div>
        </div>
    );
}

export default ImagePopup;