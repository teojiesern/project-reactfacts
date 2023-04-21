import React from "react"
import "./switch.css"

export default function ToggleSwitch(){
    return(
        <div className="ToggleSwitch">
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
        
    )
}