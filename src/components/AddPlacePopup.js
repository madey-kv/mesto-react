import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){
    const [name,setName] = React.useState("");
    const [link,setLink] = React.useState("");

    function handleChangeName(e){setName(e.target.value)};
    function handleChangeLink(e){setLink(e.target.value)};

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({name,link});
    }

    React.useEffect(() => {
        setName("");
        setLink("");
    }, []);

    return (
        <PopupWithForm
            title="Новое место"
            name="add" isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText="Создать">
            <div className="popup__form-item">
                <input id="card" name="place" className="popup__item popup__item_type_card-name"
                       placeholder="Название" defaultValue={''} required minLength="2" maxLength="30" onChange={handleChangeName}/>
                <span id="card-error" className="popup__error"></span>
            </div>
            <div className="popup__form-item">
                <input id="url" type="url" name="link" className="popup__item popup__item_type_card-link"
                       placeholder="Ссылка на картинку" defaultValue={''} required onChange={handleChangeLink}/>
                <span id="url-error" className="popup__error"></span>
            </div>
            <button type="submit" onClick = {handleSubmit} className="button button_type_save">Cоздать
            </button>
        </PopupWithForm>
    );
}

export default AddPlacePopup;