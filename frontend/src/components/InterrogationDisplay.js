import React from "react"
import InterrogationTextPiece from "./InterrogationTextPiece";

/**
 * @prop messages the list of messages
 * @returns the jsx to make it happen
 */
const InterrogationDisplay = ({messages}) => {

    return (
        <div style={{height: "100%", overflowY: "scroll"}}>{messages.map((text, index) => (
            <InterrogationTextPiece text={text} index={index}></InterrogationTextPiece>
          ))}</div>
    )

}

export default InterrogationDisplay;