import React from "react"
import InterrogationTextPiece from "./InterrogationTextPiece";
import Loading from "./Loading";

/**
 * @prop messages the list of messages
 * @returns the jsx to make it happen
 */
const InterrogationDisplay = ({messages}) => {

    if (messages.length % 2 === 0) {
        return (
            <div style={{height: "100%", overflowY: "scroll"}}>{messages.map((text, index) => (
                <InterrogationTextPiece text={text} index={index} key={text + index}></InterrogationTextPiece>
              ))}
              <Loading></Loading>
              </div>
        )
    }
    else {
        return (
            <div style={{height: "100%", overflowY: "scroll"}}>{messages.map((text, index) => (
                <InterrogationTextPiece text={text} index={index} key={text + index}></InterrogationTextPiece>
              ))}
            </div>
        )
    }

}

export default InterrogationDisplay;