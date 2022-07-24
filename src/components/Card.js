import React from 'react';
import deleteButton from "../images/delete.svg";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <li className="cards__item">
            <button className="button button_type_card-open"><img src={card.link} alt={card.name} onClick={ ()=> { handleClick() } } className="cards__photo" /></button>
            <button className="button button_type_delete"><img src={deleteButton}
                                                               alt="кнопка удаления" /></button>
            <div className="cards__text">
                <h2 className="cards__title">{card.name}</h2>
                <div className="cards__like">
                    <button className="button button_type_like" type="button"></button>
                    <span className="cards__like-number">{card.likes.length}</span>
                </div>

            </div>
        </li>
    );
}

export default Card;