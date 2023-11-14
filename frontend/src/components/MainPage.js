import React, {useState} from "react"
import Button from "./Button";
import About from "./About";
import styles from "../styles/MainMenu.css"
/**
 * @prop gameComponentSetMode the set mode function responsible for seting the mode of the component
 * @returns The component for the main menu, including about page
 */
const MainPage = ({gameComponentSetMode}) => {
    //the first thing the user sees
    const [mode, setMode] = useState("main");
    //responsible for the main menu 
    if (mode == "main") {
        return (
            <div id="main">
                <strong id="txt" >murder mystery game</strong>
                <Button style={styles} id="playButton" text="play" setMode={gameComponentSetMode} setString={"play"}></Button>
                <Button style={styles} id="aboutButton" text="About" setMode={setMode} setString={"about"}></Button>
                <img id="img" src="MainPageBkg.jpg" style={{ objectFit: 'cover', width: "100%", height: "100%" }}></img>
            </div>
        )
    }
    else if (mode == "about") {
        //after about button is clicked
        return (<About setMode={setMode}></About>)
    }
    else {
        throw new Error("We should not be here")
    }

    
}
export default MainPage;