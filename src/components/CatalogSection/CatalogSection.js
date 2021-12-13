import React from 'react';
import CatalogHeader from '../CatalogHeader/CatalogHeader';
import CatalogList from '../CatalogList/CatalogList'
import '../../scss/style.scss';
import purchases from "../../catalog";

function CatalogSection() {
        return (
            <section className='catalog'>
                <div className='container'>
                    <CatalogHeader />
                    <CatalogList />
                </div>
            </section>
        )
}


export default CatalogSection;