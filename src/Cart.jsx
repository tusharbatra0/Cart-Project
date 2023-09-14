import React, { useContext } from "react"; // Import React and useContext
import { CartContext } from "./Context/Cart";

const Cart = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <button className="bg-black text-white">
        Cart: {cartContext.cartItem.length} items
      </button>
    </>
  );
};

export default Cart;