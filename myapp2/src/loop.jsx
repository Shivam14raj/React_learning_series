

function Loop(){
    // making objects inside array to handle multiple users(sifferent data)
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

    return (
        <div>
          <h2>This is lecture of loop or Arrays(map) </h2>
           <table border="1">
            <thead>
                <tr>
                    <td>id</td>  
                    <td>name</td>
                    <td>place</td>
                    <td>age</td>
                    <td>university</td>                     
                </tr>
            </thead> 
              <tbody>
                {
                    userdata.map((item)=>{
                    return (
                    <tr key={userdata.id}>
                    <td> {item.id} </td> 
                    <td> {item.name} </td>
                    <td>{item.place} </td>
                    <td>{item.age} </td>
                    <td> {item.university} </td>                  
                    </tr>
                    )}) 
                }
              </tbody>

           </table>
          <h1>dummy data below</h1>
          <table border="1">  
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Place</td>
                    <td>Age</td>
                    <td>University</td>
                    <td>ID</td> 
                </tr>
            </thead> 
              <tbody>
                 <tr>
                    <td>Name</td>
                    <td>Place</td>
                    <td>Age</td>
                    <td>University</td>
                    <td>ID</td> 
                </tr>
              </tbody>

              
          </table>
            
        </div>
    )
} 
export default Loop; 