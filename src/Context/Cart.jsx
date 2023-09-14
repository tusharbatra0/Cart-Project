import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState([]); // Import useState from React
  return (
    <CartContext.Provider value={{ cartItem, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;