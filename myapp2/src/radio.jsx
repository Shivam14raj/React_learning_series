import { useState } from "react";

function Radio(){
    // states here 
    const [gender, setGender]=useState("female");
    // yeha female dalne se by defualt female rahega selected
    const[city, setcity]=useState("Bihar")
    return(
        <div>
        <h3>Select Gender </h3> 
        {/* if we keep the "name" different we can select multiple */}
        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" 
        value={"male"} checked={gender=="male"} />
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="female" 
        value={"female"} checked={gender=="female"} />
        <label htmlFor="female">Female</label> 
         <h2>Seleted gender: {gender}</h2> 
          <br />
          <h3>Select city</h3>
          <select onChange={(event)=>setcity(event.target.value)} defaultValue={"bihar"}> 
              <option value="delhi">Delhi</option>
              <option value="bihar">Bihar</option>
              <option value="UP">UP</option> 
          </select>  
          <h2>Selected City: {city} </h2>

        </div>  
    )
} 
export default Radio; 