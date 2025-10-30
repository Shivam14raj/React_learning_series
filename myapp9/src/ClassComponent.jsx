import StudentComponent from "./Student";

export default function ClassComponent(){
    return(
        <div style={{backgroundColor:"yellow", padding:10}}>
            <h1>Class Component</h1>
            <StudentComponent/>
        </div>
    )
}