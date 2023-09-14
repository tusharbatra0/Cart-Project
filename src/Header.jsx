import { Link } from "react-router-dom";
import Cart from "./Cart";
function Header() {
  return (
    <div className="flex justify-between w-full">

    <div className="flex gap-[250px]">
      <Link to="/">
        <button className="bg-black text-white">Home</button >
      </Link>
      <Link to="/about">
        <button className="bg-black text-white">About</button>
      </Link>
      <Link to="/contact">
        <button className="bg-black text-white">Contact</button>
      </Link>
    </div>
    <Link to="/cart">
  <Cart/>
  </Link>
  </div>
  );
}

export default Header;