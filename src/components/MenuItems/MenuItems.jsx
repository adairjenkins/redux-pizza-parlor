import React from 'react';
// import axios from 'axios'; /probs irrelevant, but could need in theory for eventual delete button
import { useDispatch } from 'react-redux';


function MenuItems({ pizza }) {
    const dispatch = useDispatch();

    console.log(pizza);

    const addToCart = () => {
        console.log('add to cart:', pizza.name);
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }

    const removeFromCart = () => {
        console.log('remove from cart:', pizza.name);
        dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
    }

    return (
        <>
            <div class="pizzaBox">
                <div className='menuItems'>

                    <img className='image' src={pizza.image_path} />


                    <p>{pizza.name} <span>{pizza.price}</span></p>
                    <p>{pizza.description}</p>
                </div>
                <button class="button add" onClick={addToCart}><span>ADD</span></button>
                <button class="button remove" onClick={removeFromCart}>REMOVE</button>
            </div>
        </>
    )
}

export default MenuItems;