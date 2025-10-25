import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useRef } from 'react';
import User from './User';
function App() {
const userRef= useRef();
const passwordRef= useRef(); // binding krni padegi form se



  const handleform=(event)=>{
     event.preventDefault(); // dfaltu ka page reload nhi hoga
     const user= document.querySelector("#user").value;
     console.log(user); 
  }
  const handleformref=(event)=>{
      event.preventDefault(); 
      const user= userRef.current.value;
      const pass= passwordRef.current.value; 
      console.log("user:", user); 
      console.log("password: ", pass)
  }
  
  const [newname, setnewname]= useState("Rahul");
  const displayName=()=>{
    alert("hello " + newname); 

  }

  return (
    <>
      <div>
        <h1>Use ref hook</h1>
        <form action="" onSubmit={handleform} >
        <input type="text" id='user' placeholder='Enter your username' />
        <br />
        <br />
        <input type="password" id='pass' placeholder='Enetr your password' />
         <br />
         <br />
         <button>Submit</button>

        </form>  
         <hr />
         <h1>uncontrolled component with useref</h1>
         <form action="" onSubmit={handleformref}>
         <input type="text" id='userref' ref={userRef} placeholder='Enter your username' />
         <br />
         <br />
         <input type="password" id='passref' ref={passwordRef} placeholder='eneer your password' />
         <br />
         <br />
         <button>Submit form </button>


         </form>
         <hr />
         <h2>Below code is receving fun via props</h2>

         <User displayName= {displayName} />
         
      </div>
    </>   
  )
}

export default App
