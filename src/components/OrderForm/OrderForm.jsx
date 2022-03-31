import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function OrderForm() {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.orderReducer)

    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    const [newType, setNewType] =useState('');



    const handleSubmit = () => {
        console.log('clicked into handleSubmit!');
        event.preventDefault();

        dispatch({
            type: 'ADD_ORDER',

            payload: newName,
            newAddress,
            newCity,
            newZip

        });
        setNewName('');
        setNewAddress('');
        setNewCity('');
        setNewZip('');
    }

    return (
        <>
            <form action="submit">

                <input type="text"
                    placeholder='Name'
                    value={newName}
                    onChange={event => setNewName(event.target.value)} />

                <input type="text"
                    placeholder='Address'
                    value={newAddress}
                    onChange={event => setNewAddress(event.target.value)} />

                <input type="text"
                    placeholder='City'
                    value={newCity}
                    onChange={event => setNewCity(event.target.value)} />

                <input type="text"
                    placeholder='Zip code'
                    value={newZip}
                    onChange={event => setNewZip(event.target.value)} />

                <input id='pickup' name='deliveryType' type="radio" value='pickup'
                    checked={type === 'Pickup'}
                    onChange={event => setNewType(event.target.value)} />
                <label htmlFor='pickup' pickup>Pickup</label>

                <input id='delivery' name='deliveryType' type="radio" value='delivery'
                    checked={type === 'Delivery'}
                    onChange={event => setNewType(event.target.value)} />
                <label htmlFor='delivery'>Delivery</label>

                <button onClick={handleSubmit}>Next</button>

            </form>
        </>
    )
}



export default OrderForm