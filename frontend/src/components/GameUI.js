import React from "react";
import SuspectCard from "./SuspectCard";
/**
 * @returns the UI component for the game (suspects, conversation, accusation)
 */

const GameUI = ({ }) => {
    return (<div style={{display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(153, 115, 76)"}}><SuspectCard imagePath={"./butler.png"} name="Butler"></SuspectCard>
    </div>)
}
export default GameUI;