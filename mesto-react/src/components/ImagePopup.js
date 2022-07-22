import closeButton from "../images/Close-Button.svg";

function ImagePopup(props) { 
    return (
    <div className={`popup popup__preview ${props.link && 'popup_opened'}`}>
        <div className="popup__preview-container">
            <button type="button" className="button"><img src={closeButton} alt="кнопка-крестик" className="button button_type_close" onClick={() => props.onClose()} />
            </button>
            <img src={props.link} alt="#" className="popup__preview-photo" />
                <p className="popup__preview-name"></p>
        </div>
    </div>
    );
}

export default ImagePopup;