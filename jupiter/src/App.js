
import './App.css';
import {useEffect, useState, useRef} from "react"



function App() {
 
 
  const[name, setName] = useState("")
  const renderCount = useRef(0);

  useEffect(()=>{
    renderCount.current = renderCount.current+1
  })  
  return (
    <div className="App">
      <input type = "text" value ={name} onChange ={e => setName(e.target.value)}></input>
      <div> my name is {name}</div>
      <div>i rendered{renderCount.current} times</div>
    </div>
  );
}

export default App;
