import React from 'react';
import Card from './Card.js';
import Api from "../utils/Api";
import editButtonSmall from "../images/Edit-Button-small.svg";
import editButton from "../images/Edit-Button.svg";
import addButtonBig from "../images/Add-Button-big.svg";
import addButton from "../images/Add-Button.svg";

function Main(props) {
    const [userName, setUserName] = React.useState("")
    const [userDescription, setUserDescription] = React.useState("")
    const [userAvatar, setUserAvatar] = React.useState("")
    const [cards, setCards] = React.useState([])

    let userId

    React.useEffect(() => {
        Promise.all([Api.getUserInfo(), Api.getInitialCards()])
            .then(([user, cards]) => {
                userId = user._id;
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch(err => { console.log(err) })
    });
    return (
        <main className="content">
            <div className="profile">
                <button className="button button_type_change-avatar" onClick={()=>props.onEditAvatar()}><img src={userAvatar} alt="аватар профиля"
                                                                                                             className="profile__photo" /></button>

                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>

                        <button type="button" className="button button_type_open-edit" onClick={()=>props.onEditProfile()}>
                            <picture>
                                <source srcSet={editButtonSmall} media="(max-width: 440px)" />
                                <img src={editButton} alt="кнопка редактирования профиля" />
                            </picture>
                        </button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>

                <button className="button button_type_add button_type_open-add" type="button" onClick={()=>props.onAddPlace()}>
                    <picture>
                        <source srcSet={addButtonBig} media="(max-width: 720px)" />
                        <img src={addButton} alt="кнопка для добавления карточек" />
                    </picture>
                </button>
            </div>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card, i) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;