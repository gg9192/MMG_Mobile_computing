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
    else {
        return (<SuspectInterrogation name={mode}></SuspectInterrogation>)
    }
}
export default GameUI;