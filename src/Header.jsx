import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex gap-8">
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
  );
}

export default Header;