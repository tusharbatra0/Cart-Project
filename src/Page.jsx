import React from 'react';
import { useState , useEffect } from 'react';
import Product from './Product';
import Loader from './Loader';

import { productsURL } from './config';

const Page = () => {
 const [Products,setProducts]=useState([])


  // API
  const fetchProducts = async(URL)=>{
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data)
  }
  useEffect(() => {
    fetchProducts(productsURL);
  }, []);
  

  return (
    <>
     <div className='flex flex-wrap gap-[3px] justify-center items-center' >
  {
    Products?.length === 0 ?(
    <Loader/>
    ) : (
    Products.map((item)=>{
       return <Product  
       key={item.id}
       image={item.image}
       title ={item.category}
       rating ={item.rating.rate}
       count = {item.rating.count}
       price ={item.price}
       id={item.id}
       />
    })
    )}
   
    </div>
    </>
  );
};

export default Page;






