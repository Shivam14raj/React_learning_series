import { useState } from 'react'
import College from './School'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div style={{backgroundColor: "blue", color: "white", padding:10}}>
          <h1 >Context api in react</h1>
          <College />   
       </div>
      
    </>
  )
}

export default App
