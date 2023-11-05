import React from "react";

/**
 * @returns a card representing a suspect
 */
const SuspectCard = ({name, imagePath, description}) => {
    return (<div style={{height: "150px", width: "500px", border: "groove", borderRadius: "16px", 
    display: "flex", alignItems: "center", background: "white", boxShadow: "10px 10px"}}>
        <img src={imagePath} style={{height: "80%"}}></img>
        <div style={{height: "80%"}}>
            <strong>{name}</strong>
            <div>The butler for the Greybrook mansion. </div>
        </div>
    </div>)
}
export default SuspectCard;