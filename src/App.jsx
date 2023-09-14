import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import CartContextProvider from "./Context/Cart";

function App() {
  return (
    <CartContextProvider>
      <div className="flex flex-col items-center">
        <Header />
        <Outlet />
      </div>
    </CartContextProvider>
  );
}

export default App;
