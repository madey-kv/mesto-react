import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatartPopup(props){
    const avavtarUrl = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avavtarUrl.current.value
        });
    }

    React.useEffect(
        ()=>{
            avavtarUrl.current.value='';
        },[]
    );

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="new-avatar"
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
            onClose={props.onClose}
            buttonText="Сохранить">
            <div className="popup__form-item">
                <input id="avatar" type="url" defaultValue={''} name="avatar" className="popup__item popup__item_type_avatar"
                       placeholder="Ссылка на картинку" required ref={avavtarUrl}/>
                <span id="avatar-error" className="popup__error"></span>
            </div>
            <button type="submit" onClick = {handleSubmit} className="button button_type_save">Cохранить
            </button>
        </PopupWithForm>
    )

}

export default EditAvatartPopup;