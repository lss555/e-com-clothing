import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './contexts/products.context.jsx';
import { CartProvider } from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
)
