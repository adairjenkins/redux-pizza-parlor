import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function Checkout({getPizzas}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const currentOrder = useSelector(store => store.orderReducer);
    console.log('currentOrder', currentOrder)


    //   "customer_name": "currentOrder.customer_name",
    //   "street_address": "currentOrder.street_address",
    //   "city": "currentOrder.city",
    //   "zip": "currentOrder.zip",
    //   "total": "currentOrder.total",
    //   "type": "currentOrder.type",
    //   "pizzas": "currentOrder.pizzas"

    const handleCheckout = () => {

        console.log('CHECK ME OUT', order);
        let text;

        if (confirm('Are you sure you want to checkout?') == true ){
            text = 'Your order was submitted!'

            axios.post('/api/order', order)
            .then(response => {
                getPizzas();
                history.push('/menu');
            })
            .catch(error => {
                console.log('error in post', error);
            });
            
        } else {
            text = 'Your order has not been submitted.'
        } 

        dispatch({type: 'CLEAR_ORDER'});
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