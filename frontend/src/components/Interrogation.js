import React, {useState} from "react"
import Button from "./Button"
import InterrogationDisplay from "./InterrogationDisplay"
import styles from "../styles/Interrogation.css"

const Interrogation = ({}) => {
    const [prompts, setPrompts] = useState([
        "With advancements in space technology, humanity is on the brink of exploring the cosmos like never before. From planned missions to Mars to the discovery of exoplanets in the habitable zone, our understanding of the universe is expanding rapidly.",
        "The intersection of artificial intelligence and ethics continues to be a focal point of discussion. As AI systems become more sophisticated, questions about their ethical implications, accountability, and potential impact on society are gaining prominence.",
        "The global effort to address climate change is intensifying. From renewable energy innovations to international agreements, there's a growing recognition of the need for collective action to combat the environmental challenges facing our planet.",
        "The field of biotechnology is witnessing groundbreaking discoveries, from gene editing technologies like CRISPR-Cas9 to advancements in personalized medicine. These developments hold the promise of revolutionizing healthcare and improving the quality of life for many.",
        "There's a growing push for increased representation and diversity in various forms of media. From movies and TV shows to literature and music, there's a recognition of the importance of reflecting the rich tapestry of human experiences and perspectives. This shift is contributing to a more inclusive and vibrant cultural landscape.",
        "With advancements in space technology, humanity is on the brink of exploring the cosmos like never before. From planned missions to Mars to the discovery of exoplanets in the habitable zone, our understanding of the universe is expanding rapidly.",
        "The intersection of artificial intelligence and ethics continues to be a focal point of discussion. As AI systems become more sophisticated, questions about their ethical implications, accountability, and potential impact on society are gaining prominence.",
        "The global effort to address climate change is intensifying. From renewable energy innovations to international agreements, there's a growing recognition of the need for collective action to combat the environmental challenges facing our planet.",
        "The field of biotechnology is witnessing groundbreaking discoveries, from gene editing technologies like CRISPR-Cas9 to advancements in personalized medicine. These developments hold the promise of revolutionizing healthcare and improving the quality of life for many.",
        "There's a growing push for increased representation and diversity in various forms of media. From movies and TV shows to literature and music, there's a recognition of the importance of reflecting the rich tapestry of human experiences and perspectives. This shift is contributing to a more inclusive and vibrant cultural landscape."
    ]);

    

    return (
        
        <div style={{ backgroundColor: "rgb(105,62,35)", width: "80%", height: "80%"}}>
            <div style={{height: "95%"}}>
                <InterrogationDisplay messages={prompts}></InterrogationDisplay>
            </div>
            <div style={{height: "30px", backgroundColor: "white"}}>
                <div style={{width: "87%", height: "100%"}}>
                    <input type="text" name="name" defaultValue="Enter text here" style={{height: "100%"}} />
                    <Button text="submit" id="submit"></Button>
                </div>
               
            </div>
        </div>
    )
}

export default Interrogation;