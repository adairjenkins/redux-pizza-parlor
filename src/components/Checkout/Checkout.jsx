import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function Checkout({getPizzas}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const orderArray = useSelector(store => store.orderReducer);
    const currentOrder = orderArray[0]

    const pizza = 

    const order =  {
        customer_name: currentOrder.customer_name,
        street_address: currentOrder.street_address,
        city: currentOrder.city,
        zip: currentOrder.zip,
        total: currentOrder.total,
        type: currentOrder.type,
        pizzas: currentOrder.pizzas
      }

    //   "customer_name": "currentOrder.customer_name",
    //   "street_address": "currentOrder.street_address",
    //   "city": "currentOrder.city",
    //   "zip": "currentOrder.zip",
    //   "total": "currentOrder.total",
    //   "type": "currentOrder.type",
    //   "pizzas": "currentOrder.pizzas"

    const handleCheckout = () => {
        console.log('CHECK ME OUT', order);

        axios.post('/api/order', order)
        .then(response => {
            getPizzas();
            history.push('/menu');
        })
        .catch(error => {
            console.log('error in post', error);
        });

        // dispatch({type: 'CLEAR_ORDER'});
    }

    return (
        <>
        <div id="checkoutForm">
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
        </div>
        </>
    )
}

export default Checkout;