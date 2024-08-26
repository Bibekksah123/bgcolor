import React, { useState } from 'react';

function App() {
  const [color, setcolor] = useState("")
  
  return(
    <>
    <div className="container" style={{backgroundColor:color}}>
    <button onClick={setcolor("red")}>click</button>  
    </div>  
    </>
  )
}

export default App;
