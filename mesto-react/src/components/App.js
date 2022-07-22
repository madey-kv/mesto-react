import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';


function App() {
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard("");
    }

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState("");

    const handleEditProfileClick = () => { setIsEditProfilePopupOpen (true) }
    const handleAddPlaceClick = () => { setIsAddPlacePopupOpen (true) }
    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
    const handleCardClick = (link) => { setSelectedCard(link) }

    return (
        <div className="page">
            <Header />

            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <div className="popup__form-item">
                    <input id="name" name="name" className="popup__item popup__item_type_name"
                           placeholder="Ваше имя" defaultValue={''} required minLength="2" maxLength="40" />
                        <span id="name-error" className="popup__error"></span>
                </div>
                <div className="popup__form-item">
                    <input id="description" name="description" className="popup__item popup__item_type_job"
                           placeholder="Описание профиля" defaultValue={''} required minLength="2" maxLength="200" />
                        <span id="description-error" className="popup__error"></span>
                </div>
                <button type="submit" className="submit button button_type_save button_type_save-edit">Сохранить
                </button>
            </PopupWithForm>

            <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <div className="popup__form-item">
                    <input id="card" defaultValue={''} name="place" className="popup__item popup__item_type_card-name"
                           placeholder="Название" required minLength="2" maxLength="30" />
                        <span id="card-error" className="popup__error"></span>
                </div>
                <div className="popup__form-item">
                    <input id="url" type="url" defaultValue={''} name="link" className="popup__item popup__item_type_card-link"
                           placeholder="Ссылка на картинку" required />
                        <span id="url-error" className="popup__error"></span>
                </div>
                <button type="submit" className="submit button button_type_save button_type_save-add">Создать</button>
            </PopupWithForm>

            <PopupWithForm title="Обновить аватар" name="new-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <div className="popup__form-item">
                    <input id="avatar" type="url" defaultValue={''} name="avatar" className="popup__item popup__item_type_avatar"
                           placeholder="Ссылка на картинку" required />
                        <span id="avatar-error" className="popup__error"></span>
                </div>
                <button type="submit" className="submit button button_type_save">Сохранить</button>
            </PopupWithForm>

            <ImagePopup link={selectedCard} onClose={closeAllPopups}/>
            
            <Footer />      
          
        </div>
    );
}

export default App;
