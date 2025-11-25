import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Home from './Homepage';
import About from './About';
import Contact from './Contact';
import Navbar from './navbar';

const router =createBrowserRouter(
  [
    // created route 
    {path: "/",
      element: <div>
        <Home/> 
        <Navbar/>
      </div>
    }, // home page 

    {path:"/about",
      element: <div>
        <About/> 
        <Navbar/>
      </div> 
    },
    {path:"/contact", 
      element: <div>
        <Contact/> 
        <Navbar/>
      </div> 
    }, 
    {
      path:"/dashboard", 
    }
  ]
)

function App() {
    
  return (
    <>
       <div style={{backgroundColor: "yellow", color: "blue", padding:10}}>
          <h1 >Context api in react</h1>
          <div>
            <RouterProvider router={router}/>  
          </div>
          
       </div>
      
    </>
  )
}   

export default App
