import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout() {
    //will need post route to database. 
    //alert to confirm
    //clear the items from the cart
    //nav back to database

    const array = useSelector(store => store.orderReducer);
    const order = array[0]

    axios.post('/')

    //POST OBJECT WILL LOOK LIKE THIS: 
    // {
    //     "customer_name": "Donatello",
    //     "street_address": "20 W 34th St",
    //     "city": "New York",
    //     "zip": "10001",
    //     "total": "27.98",
    //     "type": "Pickup",
    //     "pizzas": [{
    //       "id": "1",
    //       "quantity": "1"
    //     },{
    //       "id": "2",
    //       "quantity": "1"
    //     }]
    //   }

    return (
        <>
            <div align="left">
                <h3>Step 3: Checkout</h3>
            </div>
            <div align="left">
                <p>{order.customer_name}</p>
                <p>{order.street_address}</p>
                <p>{order.city} <span>  {order.zip}</span></p>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Pizza Name</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Checkout;