import { Link } from 'react-router-dom';


const Product = ({ image, title, rating , price , id ,count }) => {

    return (
      <div className="mt-4 flex flex-col gap-4 items-start justify-items-start  p-4 min-w-[300px] max-w-[300px] min-h-[450px] max-h-[450px] ">  
      <img className="image" src={image} alt="" />
      <h2>{title}</h2>

      <div className='flex gap-2 items-center' >
     <h2 className=' rounded bg-[#388e3c] text-white p-2'>{rating}⭐</h2> <h3>({count}) Ratings</h3>
     </div>
      <h2>MRP:- ₹{price}/-</h2>

    

      <Link to={`/product/${id}`}>
      <button className="bg-[#ff9f00] rounded text-white">View Product</button>
      </Link>
      </div>
      
    );
  };
  export default Product;