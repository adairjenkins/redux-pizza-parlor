import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout({getPizzas}) {
    //will need post route to database. 
    //alert to confirm
    //clear the items from the cart
    //nav back to database

    const orderArray = useSelector(store => store.orderReducer);
    const currentOrder = orderArray[0]

    const order =  {
        "customer_name": "Donatello",
        "street_address": "20 W 34th St",
        "city": "New York",
        "zip": "10001",
        "total": "27.98",
        "type": "Pickup",
        "pizzas": [{
          "id": "1",
          "quantity": "1"
        },{
          "id": "2",
          "quantity": "1"
        }]
      }

    const handleCheckout = () => {

        console.log('CHECK ME OUT')

        axios.post('/api/order', {order})
        .then(response => {
            getPizzas();
        })
        .catch(error => {
            console.log('error in post', error);
        })

    }

    return (
        <>
            <div align="left">
                <h3>Step 3: Checkout</h3>
            </div>
            <div align="left">
                <p>{currentOrder.customer_name}</p>
                <p>{currentOrder.street_address}</p>
                <p>{currentOrder.city} <span>  {currentOrder.zip}</span></p>
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
                        {currentOrder.pizzas.map((pizza) => {
                            return(<tr key={pizza.id}>
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                                </tr>)})}          
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </>
    )
}

export default Checkout;