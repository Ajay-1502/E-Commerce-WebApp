import { useState } from 'react';
import Header from './components/Header';
import DisplayProducts from './components/DisplayProducts';
import Footer from './components/Footer';
import Modal from './components/UI/Modal';
import Cart from './components/cart/Cart';
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
    <div>
      <Header cartHandler={openCartHandler} />
      <DisplayProducts />
      {showCart && (
        <Modal onClose={closeCartHandler}>
          <Cart onClose={closeCartHandler} />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default App;
