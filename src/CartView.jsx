import { useContext } from "react";
import { cartContext } from "./Context/Cart";
import Loader from "./Loader";
const CartView = () => {
  const { cartItem } = useContext(cartContext);
  return (
    <div className="mt-10 flex  flex-wrap gap-3 justify-center items-center">
      {cartItem?.length === 0 ? (
        <Loader />
      ) : (
        cartItem.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-[300px] min-w-[300px] max-h-[150px] min-h-[150px] border border-black rounded p-1  justify-center items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[150px] min-w-[150px] max-h-[80px] min-h-[80px]"
              />
              <h3>{item.category}</h3>
              <h3>{item.price}</h3>
              <hr />
            </div>
            // <Product
            //   key={item.id}
            //   image={item.image}
            //   title={item.category}
            //   rating={item.rating.rate}
            //   count={item.rating.count}
            //   price={item.price}
            //   id={item.id}
            // />
          );
        })
      )}
    </div>
  );
};

export default CartView;
