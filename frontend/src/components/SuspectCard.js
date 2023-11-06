import React from "react";
import styles from "../styles/SuspectCard.css"
/**
 * @returns a card representing a suspect
 */
const SuspectCard = ({name, imagePath, description}) => {
    return (<div style={styles} className="card">
        <img src={imagePath} style={{height: "80%"}}></img>
        <div style={{height: "80%"}}>
            <strong>{name}</strong>
            <div>{description}</div>
        </div>
    </div>)
}
export default SuspectCard;