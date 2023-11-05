import React, {useState} from "react"
import Button from "./Button";
import About from "./About";
import styles from "../styles/MainMenu.css"
/**
 * @prop
 * @returns The component for the main menu, including about page
 */
const MainPage = () => {

    const [mode, setMode] = useState("main");
    console.log(setMode)
    //responsible for the main menu 
    if (mode == "main") {
        return (
            <div id="main">
                <strong id="txt" >murder mystery game</strong>
                <Button style={styles} id="playButton" text="play"></Button>
                <Button style={styles} id="aboutButton" text="About" setMode={setMode} setString={"about"}></Button>
                <img id="img" src="MainPageBkg.jpg" style={{ objectFit: 'cover', width: "100%", height: "100%" }}></img>
            </div>
        )
    }
    else if (mode == "about") {
        return (<About setMode={setMode}></About>)
    }

    
}
export default MainPage;