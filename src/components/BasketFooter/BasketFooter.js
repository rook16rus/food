import React from "react";

function BasketFooter() {
    let sum = 0;
    const purchases = JSON.parse(localStorage.getItem('purchases'));
    purchases.forEach(food => {
        sum += food.price;
    });

    return (
        <footer className="basket-footer">
            <div className="container">
                <div className="basket-footer__inner">
                    <p className="basket-footer__sum">
                        Заказ на сумму: <span>{sum}</span> ₽
                    </p>
                    <button className="basket-footer__button button">Оформить заказ</button>
                </div>
            </div>
        </footer>
    )
}

export default BasketFooter;