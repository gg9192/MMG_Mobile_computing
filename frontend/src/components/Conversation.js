import React from "react";
import styles from "../styles/Conversation.module.css"

/**
 * @prop props 
 * @returns a interface for the user to communicate with game characters
 */

const Conversation = () => {
    return (
        <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column} id="left">
                        <h3>Detective</h3>
                        <div>
                            <input type="text" placeholder={'to ' + props.suspectName + "..."}/>
                            <button onClick={props.onSubmit}>Submit</button>
                        </div>
                    </div>
                    
                    <div className={styles.column} id="right">
                        <h3>{props.suspectName}</h3>
                            <p>
                                {props.suspectName}'s response.
                            </p>
                    </div>
                </div>
            </div>
    );
}

export default Conversation;