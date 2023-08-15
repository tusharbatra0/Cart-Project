import React from 'react';
import Cart from './Cart';
import { items } from './item'; 

const Page = () => {
  console.log(items);
  const listedItems = items.map((item, index) => {
    return <Cart key={index} image={item.image} title={item.title} />;
  });

  return (
    <div>
      <div >{listedItems}</div>
      <h1>Cart: 0</h1>
    </div>
  );
};

export default Page;






