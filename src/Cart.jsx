const Cart = (prop) => {

  function addtoCart(item) {
    prop.setCart((prev) => {
      return [...prev , item]
    });
  }
// console.log(addtoCart())
    return (
      <div>
        <img height="230px" width="150px" src={prop.item.image} alt={prop.name}  />
        <p>{prop.item.title}</p>
        <p>{prop.item.price}</p>
        <button onClick={() => addtoCart(prop.item)}className="button">Add to cart</button>
      </div>
    );
  };
  export default Cart;