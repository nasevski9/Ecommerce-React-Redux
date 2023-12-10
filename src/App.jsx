import './App.css'
import { BrowserRouter as Route, Routes, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './components/utils/store.js';

import Navbar from './components/Header/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Pages/Home.jsx';
import Products from './components/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';
import OneCategory from './components/Category/OneCategory.jsx';
import Error from './components/Pages/Error.jsx';
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';

function App() {

  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <>
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<OneCategory />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </HashRouter>
    </Provider>
  </>
  )
}

export default App