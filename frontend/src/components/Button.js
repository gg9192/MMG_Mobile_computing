import React from "react";
import styles from "../styles/Button.css"

/**
 * @prop {} Text the text to be displayed 
 * @prop {} id the id selector for css style
 * @prop {} SetMode the setmode callback function that changes the mode
 * @returns a interface for the user to communicate with game characters
 */

const Button = ({text, id, SetMode}) => {

    return(
        <button id={id} >{text}</button>
    );

}
export default Button;