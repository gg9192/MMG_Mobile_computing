import React from "react";
import styles from "../styles/Button.css"

/**
 * @prop {string} Text the text to be displayed 
 * @prop {string} id the id selector for css style
 * @prop {function} setMode the setmode callback function that changes the mode of whatever
                thing that this is attatched to
 * @prop {string or any} setString the string that the method sets the mode to 
 * @returns a interface for the user to communicate with game characters
 */

const Button = ({text, id, setMode, setString}) => {

    /*handles the button being clicked */
    function handleClick() {
        setMode(setString)
    }

    return(
        <button id={id} className="button" onClick={handleClick}>{text} </button>
    );

}
export default Button;