function College({name="user"}){ // default props(agar name mein kuch na pass ho toh ye dikhega)
     return (
        <div>

            <h1> College Name: {name}</h1>
            <div style={{color: "blue", border: "2px solid red", display:"inline-block"}}>
                <h1>Banana</h1>
            </div>
        </div>
     )
}

export default College; 