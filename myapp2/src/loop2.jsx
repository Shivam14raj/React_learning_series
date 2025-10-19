import User from "./user";

function Loop2(){ 
    const userdata=[
        {
          name: "rahul",
          place:"delhi",
          age:"22",
          university:" IPU",
          id:1
        }, 

        { 
          name: "vivek",
          place:"jharkhand",
          age:"24",
          university:" IPU",
          id:2 
              
        } 
    ] 
  return(
    <div>
      <h1>reuse component in loop(better use of props)</h1>
      {
         userdata.map((user)=>(
            <div key={user.id}>
            {/* below is the perfect example of props */}
            <User data={user} />    
             </div>
         ))
      }
    </div> 
  )
} 
export default Loop2; 