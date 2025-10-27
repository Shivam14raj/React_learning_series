function UserRef(props){
    return( 
        <div>
      <input type="text" ref={props.ref} placeholder='Enter your name'/>

        </div>
    )
}
export default UserRef; 