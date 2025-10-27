import { useState } from "react";

function AddUser({name, setName}){
    
    return(
         <div>
            <h1>Add user </h1>
            <input type="text" placeholder="Enter username" value={name} onChange={(event)=>setName(event.target.value)}/>

            <hr />
         </div>
    )
}
export default AddUser;   