import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import MenuList from '../MenuList/MenuList';
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <div className='App'>
      < Header/>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <MenuList />
    
      <Checkout/>
    </div>
  );
}

export default App;
