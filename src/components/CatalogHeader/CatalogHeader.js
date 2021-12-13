import React from 'react';

function CatalogHeader() {
    return (
        <header className="catalog__header">
            <h1 className="catalog__title">Наша продукция</h1>
            <div className="header-basket">
                <p className="header-basket__quantity">
                    <span className="header-basket__quantity-count">0</span> товаров <br/>
                    на сумму <span className="header-basket__quantity-sum">0</span> ₽
                </p>
                <a className="header-basket__link" href="./basket.html"></a>
            </div>
        </header>
    )
}

export default CatalogHeader;