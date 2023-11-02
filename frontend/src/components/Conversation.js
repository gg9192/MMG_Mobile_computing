import React from "react";
import styles from "../styles/Conversation.module.css"

class Conversation extends React.Component {

    constructor() {
        super()
        this.state = {
            suspectName: "Suspect"
        }
    }

    handleSubmit() {
        alert("Submitted!")
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column} id="left">
                        <h3>Detective</h3>
                        <div>
                            <input type="text" placeholder="Enter text here."/>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                    
                    <div className={styles.column} id="right">
                        <h3>{this.state.suspectName}</h3>
                            <p>
                                text
                            </p>
                    </div>
                </div>
            </div>
        );

    }
}

export default Conversation;