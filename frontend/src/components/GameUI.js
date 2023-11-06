import React from "react";
import SuspectPanel from "./SuspectPanel";
/**
 * @returns the UI component for the game (suspects, conversation, accusation)
 */

const GameUI = ({}) => {
    return (
    <div style={{height: "100%"}}>
        <SuspectPanel></SuspectPanel>
    </div>
        )
}
export default GameUI;