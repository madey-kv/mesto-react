import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import {useEffect, useState} from 'react';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard({});
    }

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    const handleEditProfileClick = () => { setIsEditProfilePopupOpen (true) }
    const handleAddPlaceClick = () => { setIsAddPlacePopupOpen (true) }
    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
    const handleCardClick = (card) => {setSelectedCard(card)}

    useEffect(
        ()=>{
            Promise.all([api.getUserInfo(), api.getInitialCards()])
                .then(([profile, cards]) => {
                    setCurrentUser(profile);
                    setCards(cards);
                })
                .catch(err => { console.log(err) });
        },
        []
    );

    function handleUpdateUser(user){
        api.editUserInfo(user)
            .then ((res)=>{
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch(err=>console.log(err))
    }

    function handleUpdateAvatar(avatarUrl){
        api.editUserAvatar(avatarUrl)
            .then ((res)=>{
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch(err=>console.log(err))
    }

    function handleAddPlaceSubmit(card){
        api.addNewCard(card)
            .then ((newCard)=>{
                console.log(newCard);
                setCards([newCard,...cards]);
                closeAllPopups();
            })
            .catch(err=>console.log(err))
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.updateLikeStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card){
        api.deleteCard(card._id)
            .then (res=>{
                console.log (res)
                setCards((state) => state.filter((c) => c._id !== card._id && c));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <div className="container">
                <Header />

                <Main onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={handleCardClick}
                      cards={cards}
                      onCardLike={handleCardLike}
                      onCardDelete={handleCardDelete}/>

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onUpdateUser={handleUpdateUser}
                    onClose={closeAllPopups}
                />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onAddPlace={handleAddPlaceSubmit}
                    onClose={closeAllPopups}
                />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onUpdateAvatar={handleUpdateAvatar}
                    onClose={closeAllPopups}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

                <Footer />
            </div>
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;