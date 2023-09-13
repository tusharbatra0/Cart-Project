import { Outlet } from "react-router-dom";
import './App.css'
import Header from './Header'
function App() {

  return (
    <>
    <div className="flex flex-col items-center">
   <Header/>
   <Outlet/>
   </div>
    </>
  )
}

export default App
