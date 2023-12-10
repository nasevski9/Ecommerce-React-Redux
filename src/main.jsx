import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

import { Provider } from 'react-redux';
import store from './components/utils/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
