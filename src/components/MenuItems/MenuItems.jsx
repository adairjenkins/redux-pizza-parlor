import React from 'react';
// import axios from 'axios'; /probs irrelevant, but could need in theory for eventual delete button

function MenuItems({ pizza }) {
    console.log(pizza);

    return (
        <>
            <div className='menuItems'>
                
                    <img className='image' src={pizza.image_path} />
                
                
                    <p>{pizza.name} <span>{pizza.price}</span></p>
                    <p>{pizza.description}</p>
            </div>
        </>
    )
}

export default MenuItems;