import React from 'react'
import './index.css'
import Fullproduct from './Fullproduct'
import ReactDOM from 'react-dom/client'
import Cartview from './Cartview'
import Page from './Page'
import About from './About'
import Contact from './Contact'
import { Outlet } from 'react-router-dom'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page />,
      },
      {
        path: "/cart",
        element: <Cartview />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <Fullproduct/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter}/>
   
)
