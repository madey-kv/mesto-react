import closeButton from "../images/Close-Button.svg";

function PopupWithForm(props) { 
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="button button_type_close" type="button" onClick={() => props.onClose()}><img
                    src={closeButton} alt="кнопка-крестик" /></button>

                <h2 className="popup__title">{props.title}</h2>

                <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
