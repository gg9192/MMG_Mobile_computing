import React, {useState} from "react";
import SuspectPanel from "./SuspectPanel";
import GameIntro from "./GameIntro";
/**
 * @returns the UI component for the game (suspects, conversation, accusation)
 */

const GameUI = ({}) => {
    const [mode, setMode] = useState("introduction");
    
    if (mode == "introduction") {
        //this is where we introduce the game
        return (<GameIntro setMode={setMode}></GameIntro>)
    }
    if (mode == "main") {
        //this is where the grid of 4 suspects is
    return (
    <div style={{height: "100%"}}>
        <SuspectPanel setMode={setMode}></SuspectPanel>
    </div>)
    }
    
}
export default GameUI;