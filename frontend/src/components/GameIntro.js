import React from "react";
import Button from "./Button";
import { Textfit } from 'react-textfit';

/** 
 * @prop {function} setMode setmode for GameUI
 * This gives the user an introduction to the game
*/
const GameIntro = ({setMode}) => {

    return (<div style={{width: "100%", height: "100%", backgroundColor: "rgb(153, 115, 76)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignContent: "center"}}>
                <div style={{width: "90%"}}>
                <strong style={{fontSize: "2em"}}>In the dimly lit, old manor of Greybrook, a dreadful murder has occurred. 
        Sir Reginald Greybrook, the wealthy patriarch of the family, was found dead in 
        his study. As the detective in charge, your task is to interview the four main 
        suspects and uncover the truth behind this murder mystery..</strong>
                </div>
            </div>
        <div style={{display: "flex", height: "100px", justifyContent: "center", alignItems: "center"}}>
            <Button text="continue" setMode={setMode} setString={"main"}></Button>
        </div>
    </div>)
}
export default GameIntro;