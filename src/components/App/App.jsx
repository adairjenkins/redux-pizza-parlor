import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import MenuList from '../MenuList/MenuList';
import Checkout from '../Checkout/Checkout';
import OrderForm from '../OrderForm/OrderForm';
import HomePage from '../HomePage';
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

        <Route path='/' exact>

          <div id="navBox">
            <nav>
              <p><Link to='/menu' class="link">View Menu</Link></p>
              <p><Link to='/form' class="link">Place Your Order</Link></p>
              <p><Link to='/checkout' class="link">Checkout</Link></p>
            </nav>

          </div>
          <HomePage />

        </Route>

        <Route path='/menu'>
          {/* Step 1: Select your Pizza */}

          <div id="navBox">
            <nav>
              <p><Link to='/menu' class="link">View Menu</Link></p>
              <p><Link to='/form' class="link">Place Your Order</Link></p>
              <p><Link to='/checkout' class="link">Checkout</Link></p>
            </nav>

          </div>
          <MenuList
            getPizzas={getPizzas}
          />
        </Route>

        <Route path='/form'>
          <div id="navBox">
            <nav>
              <p><Link to='/menu' class="link">View Menu</Link></p>
              <p><Link to='/form' class="link">Place Your Order</Link></p>
              <p><Link to='/checkout' class="link">Checkout</Link></p>
            </nav>

          </div>
          {/* Step 2: Customer Information */}
          <OrderForm />
        </Route>

        <Route path='/checkout'>
          <div id="navBox">
            <nav>
              <p><Link to='/menu' class="link">View Menu</Link></p>
              <p><Link to='/form' class="link">Place Your Order</Link></p>
              <p><Link to='/checkout' class="link">Checkout</Link></p>
            </nav>

          </div>
          {/* Step 3: Checkout */}
          <Checkout
            getPizzas={getPizzas}
          />
        </Route>

      </div>
    </Router >
  );
}

export default App;
