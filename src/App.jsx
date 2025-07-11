import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './components/cart/ContextProvider';
import DisplayProducts from './components/DisplayProducts';
import Modal from './components/UI/Modal';
import Cart from './components/cart/Cart';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';

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
        {
          index: true,
          element: <DisplayProducts cartHandler={openCartHandler} />,
        },
        { path: '/about', element: <About /> },
        { path: '/home', element: <Home /> },
      ],
    },
  ]);

  return (
    <>
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
