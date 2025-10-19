function Vegetable(props){
    return(
        <div>
            <h1>{props.vegname}</h1>
        </div>
    )
}
export default Vegetable;

export function Fruitname({favfruit, rate}){
     return(
         <div>
             <h1>fruit name: {favfruit}</h1>
             <h1>rate of fruit: {rate}</h1> 
         </div>    
     )
}  