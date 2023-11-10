import React from "react";
import Button from "./Button";

/** 
 * @prop setMode setmode for GameUI
 * This gives the user an introduction to the game
*/
const GameIntro = ({setMode}) => {

    return (<div style={{display: "flex", width: "100%", height: "100%", backgroundColor: "rgb(153, 115, 76)",
    flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "80%"}}><strong style={{fontSize: "3em"}}>In the dimly lit, old manor of Greybrook, a dreadful murder has occurred. 
        Sir Reginald Greybrook, the wealthy patriarch of the family, was found dead in 
        his study. As the detective in charge, your task is to interview the four main 
        suspects and uncover the truth behind this murder mystery.</strong>
        <div style={{height: "80px", paddingLeft: "450px", marginTop: "-30px"}}>
            <Button text="continue" setMode={setMode} setString={"main"}></Button>
        </div>
        </div>
    </div>)
}
export default GameIntro;