import React from 'react';
import deleteButton from "../images/delete.svg";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card.link);
    }
    return (
        <li className="cards__item">
            <button className="button button_type_card-open"><img src={props.card.link} alt={props.card.name} onClick={ ()=> { handleClick() } } className="cards__photo" /></button>
            <button className="button button_type_delete"><img src={deleteButton}
                                                               alt="кнопка удаления" /></button>
            <div className="cards__text">
                <h2 className="cards__title">{props.card.name}</h2>
                <div className="cards__like">
                    <button className="button button_type_like" type="button"></button>
                    <span className="cards__like-number">{props.card.likes.length}</span>
                </div>

            </div>
        </li>
    );
}

export default Card;