import { useEffect, useState } from "react";

function Hook(){
  
const[counter, setCounter]=useState(0); 
const[data, setData]= useState(2); 

// when we update state componenets gets re-render so we handle using useEffect
// if we wouldn't have use useEffect and  wrtie fun directly then jitni baar button click hota utni baar fun call hota(re-render hota)
// issi chiz ho side effect bolte hai in react(baar baar fun call huaa jaa rha hai)

useEffect(()=>{
      CallOne(); 
},[counter])  
function CallOne(){
      console.log("fun is called")  
} 

    return(
        <div>
           <h1>use effect below</h1>
           <hr />
           <button onClick={()=>setCounter(counter+1)} > Counter {counter}</button>
           {/* below data wale pe call nhi ho rha hai */}
           <button onClick={()=>setData(data+1)}> data {data}</button> 
        </div>    
    )
} 
export default Hook; 