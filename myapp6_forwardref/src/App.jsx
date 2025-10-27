import { useRef, useState } from 'react'
import UserRef from './UserRef';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {useFormStatus} from 'react-dom'; // from is must for  "useformstatus"

function App() {
  const inputRef= useRef(null); 

  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.style.backgroundColor="yellow";   
  }

  const handleSubmit=async()=>{
    await new Promise(res=>setTimeout(res, 2000)); // 2 sec ka delay while submitting form

  }   
 
  function CustomerForm(){
    const {pending}= useFormStatus()   
     return(
       <div>  
        <input type="text" placeholder='Enter name' />   
        <br />
        <br />
        <input type="text" placeholder='enetr your password' />   
        <br />
        <br />
        <button disabled={pending}>{pending?'Submitting...': 'Submit'}</button>  
       </div>  
     )
  } 
  

  const Cup=({guest})=>{
     return(
        <h1>We have {guest} guest at home so need {guest} cup of tea </h1>
     )
  } 


  const [users, setusers]= useState([]); 
  const [user, setuser]= useState(''); 


  const HandleAddUser=()=>{
     setusers([...users, user])
  } 

   const total_user= users.length; // derived state 
   const last= users[users.length-1] || "No user yet"; 
   const uniqueUser= [...new Set(users)].length // here ... is very imp, Set ko wapas array mein convert kr dia
   

  return (  
    <>
      <div>Forward Ref</div>
      <UserRef  ref= {inputRef}/>
      <button onClick={updateInput}>update input field</button> 

      <hr />
        
      <form action={handleSubmit}>
         <CustomerForm />
      </form> 

      <hr />
      
      <div>
        <h1>Pure Function</h1>
        <p>If input is same then we will always get same output everytime </p>
      </div>  
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />

      <hr /> 
      <h2>Derived State(very imp) </h2>
      <p>Make UI fast by reducing no of states because we use variables and variables are light weight compared to states</p>
       
       <h2>Total users: {total_user} </h2>
      <h2>Total unique user: {uniqueUser} </h2>
      <h2>Last user: {last} </h2>

      <input type="text" placeholder='Enter your name' onChange={(event)=>setuser(event.target.value)} />
      <button onClick={HandleAddUser}>Add user </button>     

      {
        users.map((item, index)=>{
            return <h4 key={index} >{item} </h4>
        })
      }



      

    </>
  )
}

export default App
