import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './scss/style.scss'
import BasketSection from "./components/BasketSection/BasketSection";

ReactDOM.render(
    <React.StrictMode>
        <BasketSection />
    </React.StrictMode>,
    document.querySelector('.main')
);



/*   Реализация кнопок удаления товаров   */

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        let foodsSum = document.querySelector('.basket-footer__sum span').innerText * 1;
        const foodPrice = this.parentNode.querySelector('.basket__item-price').innerText.slice(0, -2) * 1;

        console.log(foodPrice);

        document.querySelector('.basket-footer__sum span').innerText = foodsSum - foodPrice;
        this.parentNode.parentNode.remove();

        e.preventDefault();
    })
});

/*   Реализация кнопки оформления покупки   */

const registrationButton = document.querySelector('.basket-footer__button');

registrationButton.addEventListener('click', (e) => {
    let foodsSum = document.querySelector('.basket-footer__sum span').innerText * 1;
    let foodsCount = document.querySelectorAll('.basket__item').length;

    alert(`Куплено количество товаров: ${foodsCount}. На сумму: ${foodsSum} руб`);
});