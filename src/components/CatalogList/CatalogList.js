import React from 'react';
import CatalogItem from "../CatalogItem/CatalogItem";
import img from '../../img/catalog-1.png'
import img2 from '../../img/catalog-2.png'
import img3 from '../../img/catalog-3.png'

const foods = [
    {
        "id": 1,
        "name": "Устрицы по рокфеллеровски",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        "price": "2 700 ₽",
        "gram": "500 г.",
        "img": img
    },
    {
        "id": 2,
        "name": "Свиные ребрышки на гриле с зеленью",
        "descr": "Не следует, однако забывать, что реализация намеченных плановых",
        "price": "1 600 ₽",
        "gram": "750 г.",
        "img": img2
    },
    {
        "id": 3,
        "name": "Креветки по-королевски в лимонном соке",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
        "price": "1 820 ₽",
        "gram": "7 шт.",
        "img": img3
    },
    {
        "id": 4,
        "name": "Устрицы по рокфеллеровски",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        "price": "2 700 ₽",
        "gram": "500 г.",
        "img": img
    },
    {
        "id": 5,
        "name": "Устрицы по рокфеллеровски",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        "price": "2 700 ₽",
        "gram": "500 г.",
        "img": img
    },
    {
        "id": 6,
        "name": "Свиные ребрышки на гриле с зеленью",
        "descr": "Не следует, однако забывать, что реализация намеченных плановых",
        "price": "1 600 ₽",
        "gram": "750 г.",
        "img": img2
    },
    {
        "id": 7,
        "name": "Креветки по-королевски в лимонном соке",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
        "price": "1 820 ₽",
        "gram": "7 шт.",
        "img": img3
    },
    {
        "id": 8,
        "name": "Устрицы по рокфеллеровски",
        "descr": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        "price": "2 700 ₽",
        "gram": "500 г.",
        "img": img
    },
];

function CatalogList() {
    return (
        <ul className="catalog__list">
            {
                foods.map((food) => {
                    return (
                        <li className="catalog__item" id={food.id} key={food.id}>
                            <CatalogItem
                                name={food.name}
                                descr={food.descr}
                                price={food.price}
                                gram={food.gram}
                                img={food.img}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CatalogList;