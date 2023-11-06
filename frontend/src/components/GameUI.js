import React from "react";
import SuspectCard from "./SuspectCard";
/**
 * @returns the UI component for the game (suspects, conversation, accusation)
 */

const GameUI = ({ }) => {
    return (<div style={{padding: "200px",display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(153, 115, 76)"}}><SuspectCard imagePath={"./butler.png"} name="Butler" description="
    In the grand manor of Ravenscroft, Mr. Montgomery is the esteemed butler, a model of unwavering professionalism and discretion. With his impeccably tailored attire, silver hair, and a demeanor that exudes grace and dignity, he oversees every detail of the household with unparalleled precision."></SuspectCard>
    </div>)
}
export default GameUI;