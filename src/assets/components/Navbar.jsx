import React from "react"
import { FaReact } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

export default function Navbar(){
    return (
        <div className="nav">
            <div className="title">
                <FaReact id="react-icon"/>
                <h1>ReactFacts</h1>
            </div>
            <div className="toggle">
                <p>light</p>
                <ToggleSwitch />
                <p>dark</p>
            </div>
        </div>
    )
}