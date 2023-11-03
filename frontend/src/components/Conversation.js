import React from "react";
import styles from "../styles/Conversation.module.css"

const Conversation = ({ suspectName }) => {
    const handleSubmit = () => {
        alert("Submitted!");
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column} id="left">
                    <h3>Detective</h3>
                    <div>
                        <input type="text" placeholder="Enter text here." />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

                <div className={styles.column} id="right">
                    <h3>{suspectName}</h3>
                    <p>
                        text
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Conversation;