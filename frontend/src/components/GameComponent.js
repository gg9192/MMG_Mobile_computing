import React from "react";
import styles from "../styles/Conversation.module.css"
import MainPage from "./MainPage";
/**
 * @param {*} props 
 * @returns The component container for what is at the center of the string
 */

const GameComponent = () => {
    return (
        <div id="game"  style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><MainPage></MainPage></div>
    );

}
export default GameComponent;