import {useContext} from 'react';
import Card from './Card.js';
import editButtonSmall from "../images/Edit-Button-small.svg";
import editButton from "../images/Edit-Button.svg";
import addButtonBig from "../images/Add-Button-big.svg";
import addButton from "../images/Add-Button.svg";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
            <div className="profile">
                <button className="button button_type_change-avatar" onClick={()=>onEditAvatar()}><img src={currentUser.avatar} alt="аватар профиля"
                                                                                                       className="profile__photo" /></button>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>

                        <button type="button" className="button button_type_open-edit" onClick={()=>onEditProfile()}>
                            <picture>
                                <source srcSet={editButtonSmall} media="(max-width: 440px)" />
                                <img src={editButton} alt="кнопка редактирования профиля" />
                            </picture>
                        </button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>

                <button className="button button_type_add button_type_open-add" type="button" onClick={()=>onAddPlace()}>
                    <picture>
                        <source srcSet={addButtonBig} media="(max-width: 720px)" />
                        <img src={addButton} alt="кнопка для добавления карточек" />
                    </picture>
                </button>
            </div>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />
                      ))
                    }
                </ul>
            </section>
        </main>
    );
}

export default Main;