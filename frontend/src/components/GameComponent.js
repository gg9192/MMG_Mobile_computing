import React from "react";
import MainPage from "./MainPage";
import About from "./About"
/**
 * @prop
 * @returns The component container for what is at the center of the screen
 */

const GameComponent = () => {
    return (
        <div id="game"  style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><MainPage></MainPage></div>
    );
}
export default GameComponent;