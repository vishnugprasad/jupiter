import React from "react";
import Profile from "./profile"
import "./userdata.css"
import {useState} from "react"

function UserData(props){
    const [color, setColor] = useState("blue")
    return(
        <div>
            <Profile batch = "CSE"> Year : 2022 </Profile>
        
        <button  onClick={ ()=>{ setTimeout(()=>{ setColor("red") },1000)
            
        }} > click to change color</button>
        <div className={color}> name : {props.name} Gender :{props.gender} pokemon : {props.children}</div>
        </div>
    )
}


export default UserData