import {useContext}from 'react';
import deleteButton from "../images/delete.svg";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardDelete, onCardLike}) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `button button_type_delete ${!isOwn && 'button_type_delete-hidden'}`
    );

    const LikeButtonClassName = (
        `button button_type_like ${isLiked && 'button_type_like-active'}`
    );

    function handleDeleteCard() {
        onCardDelete(card)
    }

    function handleClick() {
        onCardClick(card);
    }

    function handleLike() {
        onCardLike(card);
    }

    return (
        <li className="cards__item" key={card._id}>
            <button className="button button_type_card-open"><img src={card.link} alt={card.name} onClick={ ()=> { handleClick() } } className="cards__photo" /></button>
            <button className={cardDeleteButtonClassName} onClick={handleDeleteCard}><img src={deleteButton}
                                                               alt="кнопка удаления" /></button>
            <div className="cards__text">
                <h2 className="cards__title">{card.name}</h2>
                <div className="cards__like">
                    <button className={LikeButtonClassName} type="button" onClick={ () => handleLike}></button>
                    <span className="cards__like-number">{card.likes.length}</span>
                </div>

            </div>
        </li>
    );
}

export default Card;