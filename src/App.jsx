import { useState } from 'react';
import Header from './components/Header';
import DisplayProducts from './components/DisplayProducts';
import Footer from './components/Footer';
import Modal from './components/UI/Modal';
import Cart from './components/cart/Cart';
import ContextProvider from './components/cart/ContextProvider';
//import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <ContextProvider>
        <Header cartHandler={openCartHandler} />
        <DisplayProducts />
        {showCart && (
          <Modal onClose={closeCartHandler}>
            <Cart onClose={closeCartHandler} />
          </Modal>
        )}
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
