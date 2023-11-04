import React, {useState} from "react"
import Button from "./Button";
import styles from "../styles/MainMenuButton.css"

const MainPage = () => {

    
    //responsible for the main menu 
    return (
        <div id="main">
            <Button style={styles} id="playButton" text="play"></Button>
            <img id="img" src="MainPageBkg.jpg" style={{ objectFit: 'cover', width: "100%", height:"100%"}}></img>
        </div>
    )
}
export default MainPage;