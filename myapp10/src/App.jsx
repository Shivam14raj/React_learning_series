import { useEffect, useState } from 'react'

function App() {
   const [userdata, setUserdata]= useState([]); 
   useEffect(()=>{
      getUserData(); 
   }, [])
      async function getUserData(){
       const url= "https://dummyjson.com/users"; 
       let response=  await fetch(url); 
       response= await response.json();  
       setUserdata(response.users); 

   }
    console.log(userdata); 
  return (
    <>
    <div style={{background: "yellow", color:"Red", padding:"40px 40px", fontSize:"2rem"}}>Api in react tuotorial</div>
    {
      userdata && userdata.map((user)=>{
        // return <h1 key={user.id}> {user.firstName} </h1>
        return <ul key={user.id}>  
          <li>
              {user.firstName} 
          </li>
        </ul>
      })
    }

    </>

  )
}

export default App
