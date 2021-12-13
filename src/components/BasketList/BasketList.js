import BasketItem from "../BasketItem/BasketItem";
import React from "react";



function BasketList() {
    const purchases = JSON.parse(localStorage.getItem('purchases'));

    return (
        <div className="basket__content">
            <div className="container">
                <h1 className="basket__title">Корзина с выбранными товарами</h1>
                <ul className="basket__list">
                    {
                        purchases.map((purchase) => {
                            return (
                                <li className="basket__item" key={purchase.id}>
                                    <BasketItem
                                        name={purchase.name}
                                        price={purchase.price}
                                        img={purchase.img}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BasketList;