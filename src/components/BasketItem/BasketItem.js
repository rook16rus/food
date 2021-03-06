import React from "react";

function BasketItem(purchase) {
    return (
        <div>
            <img className="basket__item-img" src={purchase.img} alt="Фото блюда"/>
            <h2 className="basket__item-title">{purchase.name}</h2>
            <p className="basket__item-price">{purchase.price} ₽</p>
            <button className="delete-button" type="button"></button>
        </div>
    )
}

export default BasketItem;