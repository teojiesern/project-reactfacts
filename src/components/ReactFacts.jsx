import React from "react"
import "./ReactFacts.css"

export default function ReactFacts(props){
    const textStyle = {
        color : props.checked ? "white" : "black"
    }

    return (
        <div className="Contents">
            <div style={textStyle}>
                <h1 className="font">Fun Facts About React</h1>
                <ul className="font">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            
            
        </div>
        
    )
}