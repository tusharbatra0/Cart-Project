import { createContext, useState } from "react";
export const cartContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ cartItem, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
