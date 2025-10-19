import { useEffect } from "react";

function HookPropsCounter({count}) {
 
    const handleCount = () => {
    console.log("one time called");
    };

    // handleCount(); 

    useEffect(()=>{
       handleCount();   
    }, [count]) 

  return(  
     <div>
         <h1>Counter value via props {count} </h1>
     </div>
  )
}
export default HookPropsCounter;
