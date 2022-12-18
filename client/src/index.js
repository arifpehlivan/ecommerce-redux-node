import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import productReducer from './features/productSlice';
import cartReducer, { getTotals } from './features/cartSlice';
import orderReducer from './features/orderSlice';

const store = configureStore({
  reducer:{
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  }
})

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

