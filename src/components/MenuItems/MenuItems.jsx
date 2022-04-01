import React from 'react';
// import axios from 'axios'; /probs irrelevant, but could need in theory for eventual delete button
import {useDispatch} from 'react-redux';
import {useState} from 'react';


function MenuItems({ pizza }) {
    const dispatch = useDispatch();

    const [btnStatus, setBtnStatus] = useState(true);

    const handleBtnToggle = () => {
        setBtnStatus(!btnStatus);
    }
    
    console.log(pizza);

    const addToCart = () => {
        console.log('add to cart:', pizza.name);
        dispatch({type: 'ADD_PIZZA', payload: pizza})
        handleBtnToggle();
    }

    const removeFromCart = () => {
        console.log('remove from cart:', pizza.name);
        dispatch({type: 'REMOVE_PIZZA', payload: pizza})
        handleBtnToggle();
    }

    return (
        <>
            <div className='menuItems'>
                
                    <img className='image' src={pizza.image_path} />
                
                
                    <p>{pizza.name} <span>{pizza.price}</span></p>
                    <p>{pizza.description}</p>
            </div>
            {btnStatus ? <button onClick={addToCart}>ADD</button> 
                       : <button onClick={removeFromCart}>REMOVE</button>}
        </>
    )
}

export default MenuItems;