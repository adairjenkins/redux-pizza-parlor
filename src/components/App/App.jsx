import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import MenuList from '../MenuList/MenuList';
import Checkout from '../Checkout/Checkout';
import OrderForm from '../OrderForm/OrderForm';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  useEffect(() => {
    getPizzas();
  }, []);

  const dispatch = useDispatch();

  const getPizzas = () => {
    //selects * from pizza table in database:
    axios.get('/api/pizza')
      .then(response => {
        dispatch({ type: 'GET_MENU', payload: response.data })
      })
      .catch((error) => {
        console.log('error getting pizzas: ', error);
      })
  }


  return (
    <Router>
      <div className='App'>
        < Header />

      <Route path='/'>

        <nav>
          <li><Link to='/menu'>View Menu</Link></li>
          <li><Link to='/form'>Place Your Order</Link></li>
          <li><Link to='/checkout'>Checkout</Link></li>
        </nav>

      </Route>

      <Route path='/menu'>
        {/* Step 1: Select your Pizza */}
        <MenuList />
      </Route>

      <Route path='/form'>
        {/* Step 2: Customer Information */}
        <OrderForm />
      </Route>

      <Route path='/checkout'>
        {/* Step 3: Checkout */}
        <Checkout />
      </Route>

      </div>
    </Router >
  );
}

export default App;
