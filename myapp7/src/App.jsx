import { useState } from 'react'
// learning about updating objects and array using states 
// normal updating of variable, boolean etc is straight forward


function App() {
  
  // updating objects
  const [data, setData]= useState({
       name: "rahul",
       State: "Bihar",
       Profession: "Soft. engineer",
       address: {
           city:"xyz",
           country:"India",
           State: "Bihar"
       },
       hobby:"Cricket"

  })

  const HandleName=(val)=>{  
      data.name=val; 
      console.log(data); 

      setData({...data})
  } 

  const HandleCity=(city)=>{
      let tempCity = data.address.city;
      tempCity= city; 

      setData({...data, address:{...data.address, city:tempCity}})//learn this syntax for nested object update

  }
  
  // updating array 
  const[name, setName]=useState([
    'Rahul', 'Vivek', 'Rohan', 'Sohan'
  ])
   
  const Handlearray=(val)=>{
      console.log(name);
      name[name.length-1]=val; 
      setName([...name]) // always use a copy 

      /*
      or, 
      const temp= [...name] // taking old array
      temp[temp.length-1]= val;
      setName(temp)
      
      */

      
  }
   
  return (   
    <>
    <h1>Updaing objects using State</h1> 
     
     <input type="text" placeholder='Enter your name' 
      onChange={(event)=>HandleName(event.target.value)} />
      
       <input type="text" placeholder='Enter your city' 
      onChange={(event)=>HandleCity(event.target.value)} />

     <h2>Name: {data.name}</h2>
     <h2>hobby: {data.hobby}</h2>
     <h2>State : {data.State}</h2>
     <h2>city : {data.address.city}</h2>

     <hr />
     <h1>Updating Array in state</h1>  
      <input type="text" placeholder='Enter your name'
      onChange={(event)=>Handlearray(event.target.value)} />

     {
        name.map((item, index)=>(
           <h2 key={index}>{item}</h2> 
        ))
     }
      

      
    </>
  )
}

export default App
