import React from "react";
import styles from "../styles/Conversation.module.css"
import MainPage from "./MainPage";
/**
 * @param {*} props 
 * @returns a interface for the user to communicate with game characters
 */

function GameComponent(props) {
    return (
        <div id="game"  style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><MainPage></MainPage></div>
    );
}

export default GameComponent;