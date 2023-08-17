import React from 'react';
import Cart from './Cart';
import { useState } from 'react';
import { items } from './item'; 

const Page = () => {
  const [cart,setCart] = useState([])
  
  const listedItems = items.map((item, index) => {
    return <Cart 
    key={index}
    item = {item}
    setCart = {setCart}
     />;
  });

  return (
    <div >
      <div className='main-container'>{listedItems}</div>
      <h1>Cart: {cart.length}</h1>
    </div>
  );
};

export default Page;






