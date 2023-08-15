const Cart = (prop) => {
    return (
      <div>
        <img src={prop.image} alt={prop.name}  />
        <p>{prop.name}</p>
        <button>Add to cart</button>
      </div>
    );
  };
  export default Cart;