import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props){
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(()=>{
            setName(currentUser.name);
            setDescription(currentUser.about);
        },[currentUser]
    );

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e){setName(e.target.value)};
    function handleChangeDescription(e){setDescription(e.target.value)};

    function handleSubmit(e){
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Сохранить">
            <div className="popup__form-item">
                <input id="name" name="name" className="popup__item popup__item_type_name"
                       placeholder="Ваше имя" required minLength="2" maxLength="40"  defaultValue={name} onChange={handleChangeName}/>
                <span id="name-error" className="popup__error"></span>
            </div>
            <div className="popup__form-item">
                <input id="description" name="description" className="popup__item popup__item_type_job"
                       placeholder="Описание профиля" defaultValue={description} onChange={handleChangeDescription} required minLength="2" maxLength="200" />
                <span id="description-error" className="popup__error"></span>
            </div>
            <button type="submit" onClick = {handleSubmit} className="button button_type_save">Cохранить
            </button>
        </PopupWithForm>

    );
}


export default EditProfilePopup;