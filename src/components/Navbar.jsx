import React from "react"
import { FaReact } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";
import "./Navbar.css"

export default function Navbar(props){
    
    const backgroundStyles = {
        backgroundColor: props.checked ? "#21222A" : "white",
    }

    const textStyle = {
        color : props.checked ? "white" : "black"
    }
    return (
        <div className="nav" style={backgroundStyles}>
            <div className="title">
                <FaReact id="react-icon" />
                <h1>ReactFacts</h1>
            </div>
            <div className="toggle">
                <p style={textStyle}>light</p>
                <ToggleSwitch click={props.toggle} checked={props.checked}/>
                <p style={textStyle}>dark</p>
            </div>
        </div>
    )
}