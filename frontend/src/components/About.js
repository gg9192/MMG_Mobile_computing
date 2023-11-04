import React from "react";
import Button from "./Button";
import styles from "../styles/About.css"


const About = () => {

    return(
        <div style={{backgroundColor: "rgb(153, 115, 76)", height: "100%", fontSize: "4em", paddingTop: "30px"}}>
            <Button style={styles} id="back" text="back" ></Button>
            <strong>This is a game that seeks to leverage Meta's LLAMA 2</strong><br/>
            <strong>to create more realistic AI. This project was built for Mobile Computing</strong><br/>
            <strong> by the MMG team</strong>
        </div>
    );

}
export default About;