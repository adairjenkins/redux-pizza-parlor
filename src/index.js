import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const order = {
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    total: '',
    type: '',
    pizzas: []
}

const orderReducer = (state = order, action) => {
    switch (action.type) {
        
        case 'ADD_PIZZA':
            state.pizzas = [...state.pizzas, action.payload];
            state.total = Number(action.payload.price) + Number(state.total);
            return state;
        
        case 'REMOVE_PIZZA':
            return state.pizzas.filter((pizza) => pizza.id !== action.payload.id);
        
        case 'ADD_ORDER':
            state.customer_name = action.payload.customer_name;
            state.street_address = action.payload.street_address;
            state.city = action.payload.city;
            state.zip = action.payload.zip;
            state.total = action.payload.total;
            state.type = action.payload.type;
            
            return state;
        
        default:
            return state;
    }
}

const menuReducer = (state = [], action) => {
    if (action.type === 'GET_MENU') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        orderReducer,
        menuReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
