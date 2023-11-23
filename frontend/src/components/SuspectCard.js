import React, {useState} from "react";
import styles from "../styles/SuspectCard.css"
/**
 * @prop {string} name name of the suspect
 * @prop {string} imagePath the file path to the image
 * @prop {string} description the description of the suspect
 * @returns a card representing a suspect
 */
const SuspectCard = ({name, imagePath, description}) => {
    //if the card is hovered
    const [hovered, sethovered] = useState(false);
    /* 
    handles when the mouse hovers over the component
    */
    function onHover() {
        if (hovered == false) {
            sethovered(true)
        }
    }

    /*
    handles when the mouse leaves the component
    */
    function onExit() {
        if (hovered == true) {
            sethovered(false)
        }
    }



    if (hovered == false) {
        return (<div style={styles} onMouseEnter={onHover} onMouseLeave={onExit} className="card">
        <div style={{width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={imagePath} style={{height: "80%"}} alt={name}></img>
        </div>
        <div style={{width: "80%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <strong>{name}</strong>
            <div>{description}</div>
            </div>
        </div>)
    }
    else {
        return (<div style={styles} onMouseEnter={onHover} onMouseLeave={onExit} className="card hoveredCard">
        <div style={{width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center   "}}>
        <img src={imagePath} style={{height: "80%"}} alt={name}></img>
        </div>
        <div style={{width: "80%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <strong>{name}</strong>
            <div>{description}</div>
            </div>
        </div>)
    }
    
    
}
export default SuspectCard;