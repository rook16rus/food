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

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const foodsSum = document.querySelector('.basket-footer__sum span').innerText * 1;
        const foodPrice = this.parentNode.querySelector('.basket__item-price').innerText.slice(0, -2) * 1;

        document.querySelector('.basket-footer__sum span').innerText = foodsSum - foodPrice;
        this.parentNode.remove();

        e.preventDefault();
    })
});