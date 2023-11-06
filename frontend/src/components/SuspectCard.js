import React, {useState} from "react";
import styles from "../styles/SuspectCard.css"
/**
 * @prop name name of the suspect
 * @prop imagePath the path to the image
 * @prop description the description of the suspect
 * @returns a card representing a suspect
 */
const SuspectCard = ({name, imagePath, description}) => {
    const [hovered, sethovered] = useState(false);
    /* 
    handles when the mouse hovers over the component
    */
    function onHover() {
        console.log("a")
        if (hovered == false) {
            sethovered(true)
        }
    }

    /*
    handles when the mouse leaves  the component
    */
    function onExit() {
        if (hovered == true) {
            sethovered(false)
        }
    }

    if (hovered == false) {
        return (<div style={styles} onMouseEnter={onHover} onMouseLeave={onExit} className="card">
        <img src={imagePath} style={{height: "80%"}}></img>
        <div style={{height: "80%"}}>
            <strong>{name}</strong>
            <div>{description}</div>
            </div>
        </div>)
    }
    else {
        return (<div onMouseEnter={onHover} onMouseLeave={onExit} style={styles} className="card hoveredCard">
        <img src={imagePath} style={{height: "80%"}}></img>
        <div style={{height: "80%"}}>
            <strong>{name}</strong>
            <div>{description}</div>
        </div>
        </div>)
    }
    
    
}
export default SuspectCard;