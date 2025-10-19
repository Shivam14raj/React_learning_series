
const User= ({data})=>{
     return(
        <div>
            <h3>Name:{data.name} </h3>
            <h3>Place: {data.place} </h3>
            <h3>Age:{data.age} </h3>
            <h3>University:{data.university} </h3>
            <hr /> 
             
        </div> 
     )
}
export default User; 