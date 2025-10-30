import { useContext } from "react"
import { SubjectContext } from "../createcontext"

export default function SubjectComponent(){
    const subject =useContext(SubjectContext)
    return(
        <div style={{backgroundColor:"skyblue", padding:10}}>
        <h1>Subject is: {subject} </h1>
        </div>  
    )
} 