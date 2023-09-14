import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./Context/Cart";
import { product } from "./config";
const Fullproduct=()=>{
    const { id } = useParams();
    const { setCartItems } = useContext(CartContext);
    const[Productdata , setProductdata]=useState({})

    // Call API
    useEffect(() => {
        const apiURL = product(id);
        fetchProductdata(apiURL)
      }, [])

    //   Function fetch
    const fetchProductdata = async(URL)=>{
        const res = await fetch(URL);
        const data = await res.json();
        setProductdata(data)
      }

// Add to Cart
const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

console.log(Productdata)
    return(<>
    <div className="flex  container mx-auto flex  md:flex-row flex-col  ">

        {/* image setion */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 gap-8 justify-center items-center">
        <img className="min-w-[400px] object-cover object-center rounded max-w-[400px] min-h-[550px] max-h-[550px]" src={Productdata.image} alt="" />

       <div className="flex gap-10 ">
        <button className="w-[180px] bg-[#ff9f00]  text-white">View Product</button>
        <button className="w-[180px] bg-[#fb641b] text-white" onClick={() => addToCart(Productdata)}>Add to Cart</button>
        </div>
        </div>

        
        <div className="flex flex-col gap-4 ml-4 justify-start mt-8">
        <h1 className="text-2xl text-left">{Productdata.title}</h1>

        <div className="flex items-center gap-2 ">

        <h1 className="font-bold w-16 rounded text-xl bg-[#388e3c] text-white p-2">{Productdata.rating?.rate}</h1>
        <h1 className="text-lg"> 
            {Productdata.rating?.count} Ratings
        </h1>
        </div>
        <h1 className="text-xl w-8 ">₹{Productdata.price}</h1>

        <h2 className="text-left text-xl:=">Avalaible Offers</h2>
        <ul className="text-left">

            <li className="flex ">
            <span className="text-bold bg-[#388e3c] text-white text-2xl pb-[4px] h-[32px] rounded item-center">↗️</span>
            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C
            </li>
            <li>
            <span className="text-bold bg-[#388e3c] text-white text-2xl pb-[4px] h-[32px] rounded item-center">↗️</span>
                Bank Offer10% Instant Discount on ICICI Bank Credit Card Txns, up to ₹1250, on orders of ₹5000 and aboveT&C</li>
            <li>
            <span className="text-bold bg-[#388e3c] text-white text-2xl pb-[4px] h-[32px] rounded item-center">↗️</span>
                Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C</li>
            <li>
            <span className="text-bold bg-[#388e3c] text-white text-2xl pb-[4px] h-[32px] rounded item-center justify-center">↗️</span>
                Special PriceGet extra ₹450 off (price inclusive of cashback/coupon)T&C</li>
        </ul>
        </div>
        
    </div>
    </>)
}
export default Fullproduct