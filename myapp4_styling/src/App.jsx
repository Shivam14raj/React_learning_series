import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ExternalCSS from './externalCss';

function App() {
  // styling as a object(line 17)
//   const cardStyle={
//            border:"1px solid #d6d4d4cc",
//            width:"200px", 
//            boxShadow:"1px 2px 3px 0px #c4c2c257"
// } 
// style:{cardStyle} 
const[cardStyle, setCardstyle] = useState(
          {
           border:"1px solid #d6d4d4cc",
           width:"200px", 
           boxShadow:"1px 2px 3px 0px #c4c2c257"
} 
)   
  const[textColor, setTextcolor]= useState("black");    

 const updateTheme=(bgColor, newtextColor)=>{
    setCardstyle({...cardStyle, backgroundColor:bgColor})
    setTextcolor(newtextColor)               
 }  
 
 const [grid, setGrid]=useState(true); 

  
  return (  
    <>
    <h1 style={{color:"Red", backgroundColor:"yellow", display:"inline-block"}}>Learning about styling in REACT</h1>
     <div>
      <button onClick={()=>updateTheme('gray', 'yellow')}>Gray theme</button>
     <button onClick={()=>updateTheme('blue', 'black')} >default theme</button>
     <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
     </div>
    <div style={{display: grid? "flex":'block', flexWrap:"wrap", gap:"10px"}}>
      <div>
        <div style={cardStyle}> 
            
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-img" />
          <div style={{padding:"3px", margin:"10px", color:textColor}}>
            <h4>Rahul Kumar</h4>
            <p>Software eng. </p>  
          </div>     
        </div>
        
    </div> 

    <div>
        <div style={cardStyle}> 
            
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-img" />
          <div style={{padding:"3px", margin:"10px", color:textColor}}>
            <h4>Rahul Kumar</h4>
            <p>Software eng. </p>  
          </div>     
        </div>
        
    </div>  

    <div>
        <div style={cardStyle}> 
            
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-img" />
          <div style={{padding:"3px", margin:"10px", color:textColor}}>
            <h4>Rahul Kumar</h4>
            <p>Software eng. </p>  
          </div>     
        </div>
        
    </div>  

    <div>
        <div style={cardStyle}> 
            
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-img" />
          <div style={{padding:"3px", margin:"10px", color:textColor}}>
            <h4>Rahul Kumar</h4>
            <p>Software eng. </p>  
          </div>     
        </div>
        
    </div>     

   
    </div>

    
    </>
  )
  
}

export default App;
