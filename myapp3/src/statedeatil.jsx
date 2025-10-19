function Detail({state}){
     return(
        <div>
            <h1>Name: {state.name} </h1>
              <ul>
                <li>
                  <h3>Food: {state.food}  </h3>
                  <h3>website: {state.website} </h3>    
                </li> 
                 <li>
                    {
                       state.workers.map((state)=>(
                             <div>
                                <h3>
                                    {state.name} 
                                </h3>
                             </div>
                        )) 
                    }
                 </li>
              </ul>       
        </div>
     )
} 

export default Detail; 