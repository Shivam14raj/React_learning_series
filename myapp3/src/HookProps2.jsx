import { useEffect } from "react";

function HookPropsCounter({count, data}) {
 
    const handleCount = () => {
    console.log("one time called");
    };

    const handldata =()=>{
      console.log("data is called everytime"); // mounting 
    };

    // handleCount(); 

    useEffect(()=>{
       handleCount();   
    }, []) 
     

    // handledata har baar call hoga jab bhi data button pressed hoga
    useEffect(()=>{
      handldata();
    }, [data])  // updating 
     



  return(  
     <div>
         <h1>Counter value via props {count} </h1>
         <h1>Data value via props {data}</h1> 
     </div>
  )
}
export default HookPropsCounter;
