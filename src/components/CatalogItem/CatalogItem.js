import React from 'react';

function CatalogItem(food) {
    return (
                <div>
                    <img className="catalog__item-img" src={food.img} alt="Фото блюда"/>
                    <h2 className="catalog__item-title">{food.name}</h2>
                    <p className="catalog__item-description">
                        {food.descr}
                    </p>
                    <div className="catalog__item-price catalog-price">
                        <p className="catalog-price__price">
                            <b>{food.price}</b> / {food.gram}
                        </p>
                        <button className="add-button" type="button"></button>
                    </div>
                </div>

    )
}

export default CatalogItem;