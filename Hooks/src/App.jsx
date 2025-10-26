import { useEffect, useRef, useState } from 'react'

function App() {
 const array= useState(0); // first element is original value and 2ns is function
 console.log(array); 
 const counter=array[0]; 
 const setcounter= array[1]; 

 const increaseHandle=()=>{
     setcounter(counter+1); 
     // 2nd parameter is a function so 'counter' as a parameter gya 
 } 

//  const[count, setcount]= useState(1); (shorter)

   const[newname, setname]= useState("");

   
   const[details, setdetails]= useState({counter: 0, name: ""})
   
   const handlebtn=()=>{
       setdetails((prev)=>({
        ...prev, 
        counter: prev.counter+1,

       }))
   } 
   // below is code for useRef hook
   const[name, setName]= useState(""); 
   const[countref, setcount]= useState(0); 
  //  useEffect(()=>{
  //   //  setcount((prev)=>prev+1); 
  //  })
   const count= useRef(0); // return an object with current property
   useEffect(()=>{
     count.current=count.current+1; 
   })

  return (
    <>
      <h1>Hooks</h1>
      <hr />
      <h2>UseState Hooks</h2>
       <h1> {newname} Counter : {counter}</h1>
       <button onClick={increaseHandle}>Increase Value </button>
       <input type="text" onChange={(e)=>setname(e.target.value)}/>

       <hr />
       <h1>With objects</h1> 
       <h1> {details.name} has clicked Counter: {details.counter} times </h1>
       <button onClick={handlebtn}>Increase value</button>
       <input type="text" onChange={(e)=>setdetails(prev=>({
        ...prev, 
        name: e.target.value
       }))}/>

       <hr />
       <h1>UseRef Hook</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <h2>Name : {name} </h2>
        <h2>Renders: {count.current} </h2>



 
    </>
  )
}

export default App
