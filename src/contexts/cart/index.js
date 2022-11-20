import React, { useState, useEffect, useContext } from "react";

const CartContext = React.createContext({});
const CartConsumer = CartContext.Consumer;

const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  const setCartItems = (value) => {
    setTotal(total + value);
  };

  return (
    <CartContext.Provider value={{ setCartItems, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartConsumer, CartProvider };
