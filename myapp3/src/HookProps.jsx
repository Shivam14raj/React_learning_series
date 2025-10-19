import { useState } from "react";
import HookPropsCounter from "./HookProps2";
import Card from "./Card";
// here we have shown use of "useEffect" with the help of "props" 

function HookProps(){
 const[count, setcount]=useState(0);


    return( 
        <div> 
           
           <HookPropsCounter count={count} /> 
           <button onClick={()=>setcount(count+1)}>Counter </button>
           

        </div>  
    )    
}
export default HookProps;   