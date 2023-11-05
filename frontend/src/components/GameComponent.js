import MainPage from "./MainPage";
import React, {useState} from "react"
import GameUI from "./GameUI";
/**
 * @returns The component container for what is at the center of the screen
 */
const GameComponent = () => {
    const [mode, setMode] = useState("main");
    if (mode == "main") {
        return (
            <div id="game" style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><MainPage gameComponentSetMode={setMode}></MainPage></div>
        );
    }
    else if (mode == "play") {
        return (<div id="game" style={{display: "inline - block", width: "1200px", height: "600px", overflow: "hidden"}}><GameUI></GameUI></div>)
    }
}
export default GameComponent;