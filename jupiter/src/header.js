import React, { useState } from "react";
import "./header.css"

function Header( props) {
    const [ name, setname] = useState(0)
    var x
    
  return (
     
    <div className="header">
      <div > </div>
        <button onClick = {()=>{ x = setInterval(()=>{ setname(name+1)},2000)}}> timer</button>
        <div>{name}</div>
        <button onClick={()=>{ clearInterval(x)}}> stop</button>
    </div>
  )
}

export default Header