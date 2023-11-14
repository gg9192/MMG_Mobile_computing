import React from "react"

/**
 * represents one piece in the text history of the interrogation
 * @prop {int} index the index of the element
 * @prop {string} text the text to be included
 * 
 */
const InterrogationTextPiece = ({index, text}) => {
    // a single div of text in the interrogation text history
    //2 colors
    if (index % 2 == 0) {
        return (
            <div style={{textAlign: "left", padding: "10px", backgroundColor: "rgb(156,102,68)"}}>
                <strong>{text}</strong>
            </div>
        )
    }
    else {
        return (
            <div style={{textAlign: "left", padding: "10px"}}>
                <strong>{text}</strong>
            </div>
        )
    }
}

export default InterrogationTextPiece;