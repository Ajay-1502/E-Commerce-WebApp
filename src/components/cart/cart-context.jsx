import React from 'react';

const CartContext = React.createContext({
  cartItems: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
