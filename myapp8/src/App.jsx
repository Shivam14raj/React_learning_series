import { useActionState } from 'react'
import { useState } from 'react'
function App() {

const handleSubmit=async(prevdata, formdata)=>{
   let name = formdata.get('name');
   let password= formdata.get('pass'); 

   await new Promise(res=>setTimeout(res, 1000))
   console.log(name, password) 
   if(name && password){
     return {message: "Data Submitted", name, password}
   } else if(!name && !password) {
      return {error : "failed to submit. Enter proper data"}
   }  else if(!password){
      return {error: "Please enter your password"}
   } else  if(!name) {
      return {error :"please enter your name"}
   }   


}

// we need three parameters
const[data, action, pending]= useActionState(handleSubmit, undefined)

  return (
    <>
      <h1>Use form state hook </h1> 
       <p>used in form handling & need 3 parameters: "data", "action", "pending" </p>

       <form action={action}> 
        <input defaultValue={data?.name} type="text" placeholder='Enter you name' name='name' />
        <br />
        <br />
        <input defaultValue={data?.password} type="text" placeholder='Enter your password' name='pass' />
        <br />
        <br />
        <button disabled={pending}> {pending? "Submitting...": "Submit"} </button> 
        <br />
         {
           data?.error && <span style={{color:"red"}}>{data?.error} </span>
         }
         {
          data?.message && <span style={{color:"green"}}>{data?.message} </span>
         }
       </form>

       <h3> Name: {data?.name} </h3>
       <h3> Password: {data?.password} </h3> 
       
    </>
  )
}

export default App
