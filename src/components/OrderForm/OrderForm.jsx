import { useState } from 'react';
import axios from 'axios';

function OrderForm() {



    return (
        <>
            <form action="submit">
                
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Address' />
                <input type="text" placeholder='City' />
                <input type="text" placeholder='Zip code' />

                <input id='pickup' name='deliveryType' type="radio" value='pickup' />
                <label for='' pickup>Pickup</label>
                <input id='delivery' name='deliveryType' type="radio" value='delivery' />
                <label for='delivery'>Delivery</label>

                <button onClick={handleSubmit}>Next</button>

            </form>
        </>
    )
}



export default OrderForm