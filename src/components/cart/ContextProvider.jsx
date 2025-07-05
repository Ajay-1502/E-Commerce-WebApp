import { useState } from 'react';
import CartContext from './cart-context';

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemCartHandler = (product, quantity) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex != -1) {
        const updateItem = [...prevItems];
        const existingItem = updateItem[existingIndex];

        updateItem[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + quantity,
        };

        return updateItem;
      } else
        return [...prevItems, { key: product.id, quantity: 1, ...product }];
    });
  };

  const removeItemCartHandler = (product) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != product.id;
      });
    });
  };

  const cart = {
    cartItems: items,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default ContextProvider;
