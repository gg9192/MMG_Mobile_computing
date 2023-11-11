import React, {useState} from "react";
import SuspectPanel from "./SuspectPanel";
import GameIntro from "./GameIntro";
import SuspectInterrogation from "./SuspectInterrogation";
/**
 * @returns the UI component for the game (suspects, conversation, accusation)
 */

const GameUI = ({}) => {
    const [mode, setMode] = useState("introduction");
    
    if (mode == "introduction") {
        return (<GameIntro setMode={setMode}></GameIntro>)
    }
    if (mode == "main") {
    return (
    <div style={{height: "100%"}}>
        <SuspectPanel setMode={setMode}></SuspectPanel>
    </div>)
    }
    if (mode == "accuseButler") {
        return (
            <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", 
            display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <strong style = {{fontSize: "2em"}}>You Lose</strong>
                <strong style = {{fontSize: "2em"}}>The correct answer was Lady Victoria</strong>
                <strong style = {{fontSize: "2em"}}>Please reload the page to play again</strong>
            </div>
        )
    }
    else {
        return (<SuspectInterrogation name={mode} setMode={setMode}></SuspectInterrogation>)
    }
}
export default GameUI;