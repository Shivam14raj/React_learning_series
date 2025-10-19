import { useState } from 'react'
import './App.css'
import "./custom"
import Login, {User, Settings, name} from './custom'
import CatImage from './cat'
import Vegetable , {Fruitname}from './props'

function App(){
  const Name= "Vivek"; // similar we can write function here and call from return
  let x=10;
  let y=20; 
  let add=x+y; 
  function fruit(){
      return "apple"; 
  }
  function sum( a, b, op){
    if(op=="+"){
      return a+b; 
    } else if(op=="-"){
      return a-b; 
    } else if(op=="*"){
      return a*b; 
    } else {
        return a/b; 
    }
  }        

  const userObj={
     name:"Baby",
     age: 20,
     Country: "India"
  }     
  
  // using state 
  const [subject, setSubject]=useState("physics"); 
  const handleSub= ()=>{
     if(subject=="physics"){
      setSubject("biology")
     }else {
      setSubject("Physics")
     }
  }  

  // hide or toggle 
  const [display, SetDisplay]= useState(true); 

  // multiple if else in using states(below line 72)
  const [count, setcount]=useState(0); 
    
   return(
      <div>
        <Login/>
        <User/>
        <Settings/>
        <h1>{name?name:"user not found"}</h1>
        <h1>The name of the user is {Name}</h1>
        <h1>the addition is also possible {10+2+12}</h1>
        <button onClick={()=>alert("hello")}></button>
        <CatImage/> 
        <h1>{add}</h1>
        <h1>{fruit()}</h1> 
         <h1>{sum(2,2, "-")}</h1>
         <h1>{userObj.Country}</h1>
         <h1>{subject}</h1>
         <button onClick={handleSub} >Change subject name </button>
         {
          display?<h1>Hide and show</h1>:<h1>Toggling</h1>
         }
            
        <button onClick={()=>SetDisplay(!display)}>Hide & show</button>

        
         <h1>{count}</h1>
         <button onClick={()=>setcount(count+1)}>Counter</button>
         {
             count==0?<h1>Condition 0 </h1>
             :count==1?<h1>Condition 1</h1>
             :count==2?<h1>Condition 2</h1>:null
         }  

         <Vegetable vegname= "aalo" />
         <Fruitname  favfruit="Mango" rate="100" />
         


         

      </div>
   )
}
   

export default App
