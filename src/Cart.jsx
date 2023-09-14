import { useContext } from "react";
import { cartContext } from "./Context/Cart";
const Cart = () => {
  const { cartItem } = useContext(cartContext);

  return (
    <div className="border border-black p-2 font-bold bg-orange-400 text-white rounded">
      Cart: {cartItem.length}
    </div>
  );
};

export default Cart;
