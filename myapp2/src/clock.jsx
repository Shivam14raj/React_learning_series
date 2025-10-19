import { useState, useEffect } from "react";

function Clock({updatecolor}){
    const [time, settime]= useState(0); 
    // useEffect(()=>{
    //      setInterval(()=>{
    //          settime(new Date().toLocaleTimeString()); 
    //      }, 1000)
    // },[])
     return(
        <div> 
            <h2>This is on clock using props </h2>
            <h2 

            style={{color:updatecolor}} 
            
            >{time} </h2>  

            
        </div>
     )
      
}
export default Clock; 