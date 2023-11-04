import React from "react";
import MainPage from "./MainPage";
import About from "./About"
/**
 * @param {*} props 
 * @returns The component container for what is at the center of the string
 */

const GameComponent = () => {
    return (
        <div id="game"  style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><About></About></div>
    );

}
export default GameComponent;