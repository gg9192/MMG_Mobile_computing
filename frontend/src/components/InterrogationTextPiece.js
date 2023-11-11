import React from "react"

/**
 * represents one piece in the text history of the interrogation
 * @prop index the index of the element
 * @prop text the text to be included
 * 
 */
const InterrogationTextPiece = ({index, text}) => {
    if (index % 2 == 0) {
        return (
            <div style={{textAlign: "left", padding: "10px", backgroundColor: "rgb(156,102,68)"}}>
                <text>{text}</text>
            </div>
        )
    }
    else {
        return (
            <div style={{textAlign: "left", padding: "10px"}}>
                <text>{text}</text>
            </div>
        )
    }
}

export default InterrogationTextPiece;