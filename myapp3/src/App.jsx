import { useState } from 'react'
import Detail from './statedeatil'
import Hook from './hook'
import HookProps from './HookProps'
import Card from './Card'

function App() {
  
  const statesData=[
    {
      name:"Bihar",
      food:"lithi-choka",
      website: "www.bihar.com",
      workers:[
        {
           name:"abc",
           professon:"SWE"
        }, 
        {
          name:"rohan",
          professon:"politician"  
        }
      ]
    }, 

    {
       name:"Bengal",
       food:"rosogulla",
       website: "www.bengal.com",
       workers:[
        {
           name:"abc bengal",
           professon:"SWE"
        }, 
        {
          name:"rohan bengal",
          professon:"politician"
        }
      ]
    },

    {
      name: "UP",
      food:"verfi",
      website: "www.up.com",
      workers:[
        {
           name:"abc up",
           professon:"SWE"
        }, 
        {
          name:"rohan up",
          professon:"politician"
        }
      ]
    }, 

  ]

  return(   
    <div>
      <h1>Nested looping</h1>   
       {
        statesData.map((item, index)=>(
          <div key={index}>   
             <Detail state={item}  />
             <Hook/>
             <HookProps/>
          </div>
        ))
       }
        
    </div>
  )
}

export default App
