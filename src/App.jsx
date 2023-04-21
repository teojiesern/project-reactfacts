import React from "react"
import Navbar from "./components/Navbar"
import ReactFacts from "./components/ReactFacts"

export default function App(){
    const [isChecked, setIsChecked] = React.useState(false)

    function toggle(event){
        const {checked} = event.target
        setIsChecked(checked)
    }
    document.body.style.backgroundColor = isChecked ? "#21222A" : "white"

    return (
        <div>
            <Navbar toggle={toggle} checked={isChecked}/>
            <ReactFacts checked={isChecked}/>
        </div>
    )
}