import { useState } from 'react'
import College from './props'
import Fruits from './name'
import CheckBox from './checkboxes'
import Radio from './radio'
import Loop from './loop'
import Loop2 from './loop2'
import Clock from './clock'


let college= ["IIT KANPUR", "IIT DELHI", "IIT BOMBAY", "IIT BIHAR"]


function App() {
const[clg, setclg]= useState()  
const[val, setVal]=useState("default name");
const [color, setcolor]=useState("blue"); 


// these below states are for form
const [name, setName] = useState("");
const[password, setpassword]= useState("");
const[email, setemail]=useState("");   


  return (
    <div>
      <button onClick={()=>setclg("NIT PATNA")}>See college name </button>
       { 
      // if there is clg name then show, else nothing on screen
        clg && <College name= {clg}/> 
      }

       {/* default props below */}
       <College/>  
       

       <Fruits>  
        <h1>Apple</h1>
        <h1>Apple</h1>
        <h1 style={{color:"red"}}>Apple</h1> 
       </Fruits>

        <h1>Input field</h1>
       <input type="text" onChange={(event)=>setVal(event.target.value)} placeholder='Enter your name'/>
       {/* showing latest changes in "val" thats why it is re-rendering */}
        <h1> {val} </h1> 

        <button onClick={()=>setVal("")}>Clear value</button>


        <br /> <br />
        <form action="" method='get'>
         <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter name' />
         <br /> <br />
          <input type="text" value={password} onChange={(event)=>setpassword(event.target.value)}  placeholder='Enter your password' />
          <br /><br />
          <input type="text"  value={email} onChange={(event)=>setemail(event.target.value)} placeholder='Enter your email id' />
          <br /><br />
          <button>Submit</button> 
          <button  onClick={()=>{setName(""); setpassword(""); setemail("")}}>Clear</button>
          <h3> {name} </h3>
          <h3> {password} </h3>
          <h3> {email} </h3>

        </form> 

       
        <CheckBox/>
        <br />
        <Radio/>
        <Loop/>
        <Loop2/>
         

         {/* below is changing clor using props so we need to make state */}
         <select onChange={(event)=>setcolor(event.target.value)}> 
         <option value="red">Red</option>
         <option value="orange">Orange</option>
         <option value="blue">Blue</option>
         <option value="yellow">Yellow</option>

         </select>
        <Clock updatecolor={color} />
        
        
        

      
    </div>  
      
  )
}

export default App
