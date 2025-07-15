import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './components/cart/ContextProvider';
import DisplayProducts from './components/DisplayProducts';
import Modal from './components/UI/Modal';
import Cart from './components/cart/Cart';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import ContactUs from './components/Contact';
import ProductPage from './components/ProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout cartHandler={openCartHandler} />,
      children: [
        { path: '/home', element: <Home /> },
        {
          path: '/store',
          element: <DisplayProducts cartHandler={openCartHandler} />,
        },
        {
          path: '/store/:productId',
          element: <ProductPage />,
        },
        { path: '/contactus', element: <ContactUs /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <ContextProvider>
        <RouterProvider router={routes} />
        {showCart && (
          <Modal onClose={closeCartHandler}>
            <Cart onClose={closeCartHandler} />
          </Modal>
        )}
      </ContextProvider>
    </>
  );
}

export default App;
