import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './scss/style.scss'
import CatalogSection from './components/CatalogSection/CatalogSection'

let foodsSum = 0;
let foodsCount = 0;
const purchases = [];

ReactDOM.render(
    <React.StrictMode>
        <CatalogSection />
    </React.StrictMode>,
    document.querySelector('.main')
);


/*   Реализую событие для кнопок добавления товара   */

const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const foodPrice = this.previousSibling.querySelector('b').innerText.slice(0, -2).replace(/\s+/g, '') * 1;
        const foodTitle = this.parentNode.parentNode.querySelector('.catalog__item-title').innerText;
        const foodImg = this.parentNode.parentNode.querySelector('.catalog__item-img').src;

        purchases.push({
            name: foodTitle,
            price: foodPrice,
            img: foodImg,
        });

        console.log(purchases);

        foodsSum += foodPrice;
        foodsCount++;
        document.querySelector('.header-basket__quantity-sum').innerText = foodsSum;
        document.querySelector('.header-basket__quantity-count').innerText = foodsCount;
        e.preventDefault();
    })
});

/*   Отправляю данные о покупке для страницы с корзиной   */

window.onbeforeunload = function() {
    localStorage.setItem('purchases', JSON.stringify(purchases));
};