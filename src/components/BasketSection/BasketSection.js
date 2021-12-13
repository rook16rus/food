import React from "react";
import BasketList from "../BasketList/BasketList";
import BasketFooter from "../BasketFooter/BasketFooter";

function BasketSection() {
    return (
        <section className='basket'>
            <BasketList />
            <BasketFooter />
        </section>
    )
}


export default BasketSection;