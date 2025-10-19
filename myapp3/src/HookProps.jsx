import { useState } from "react";
import HookPropsCounter from "./HookProps2";
import Card from "./Card";
// here we have shown use of "useEffect" with the help of "props" 

function HookProps(){
 const[count, setcount]=useState(0);
 const[data, setdata]=useState(0);
 const[display, setdisplay]=useState(true); 


    return( 
        <div> 
           
           <HookPropsCounter count={count} data={data} />  
           <button onClick={()=>setcount(count+1)}>Counter </button>
           <button onClick={()=>setdata(data+1)}>data {data}</button>
           

        </div>  
    )    
}
export default HookProps;   