import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Home from './components/Pages/Home.jsx';
import Products from './components/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';
import OneCategory from './components/Category/OneCategory.jsx';
import Error from './components/Pages/Error.jsx';
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';


import { Provider } from 'react-redux';
import store from './components/utils/store.js';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     error: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, {
//         path: '/login',
//         element: <Login />
//       }, {
//         path: '/signup',
//         element: <Signup />
//       }, {
//         path: '/cart',
//         element: <Cart />
//       }, {
//         path: '/products',
//         element: <Products />
//       }, {
//         path: '/category/:category',
//         element: <OneCategory />
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <Provider store={store}>
      <App />
  </Provider>
)
