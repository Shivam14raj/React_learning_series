import { useState } from "react";

function CheckBox(){
    // states
    const[skills, setSkill]=useState([]); 
    const handleskills=(event)=>{
        console.log(event.target.value, event.target.checked)
        // checked mtlb true ho
        if(event.target.checked){
            // setSkill(event.target.value);  (this will give only one value, we need more )
            setSkill([...skills,event.target.value])
        } else{// if unchecked
            setSkill([...skills.filter((item)=>item!=event.target.value)])
        } 
    }

    return(
        <div>
            <h2>Select your skills</h2>  

            {/* here id & htmlfor is binding ki php pe bhi click kru toh check box pe ho jaye */}
            <input  onChange={handleskills} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label> 
              <br /> <br />
             <input onChange={handleskills} type="checkbox" id="java" value="java"/>
            <label htmlFor="java">java</label> 
              <br /><br />
             <input onChange={handleskills} type="checkbox" id="cpp" value="cpp"/>
            <label htmlFor="cpp">cpp</label> 
            
             <h2> {skills} </h2>

            



        </div>
    )
}
export default CheckBox; 