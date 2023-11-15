import React, {useState} from "react"
import Button from "./Button"
import InterrogationDisplay from "./InterrogationDisplay"
import styles from "../styles/Interrogation.css"
import {getCompleation, parseResponse} from '../llama-api-wrapper/llamaClient';

/**
 * see gpt-doc.txt
 * @prop the name of the suspect
 * @returns 
 */
const Interrogation = ({name}) => {
    //list of strings that start with either "User" or "LLama2"
    const [strings, setstrings] = useState([]);
    console.log(name)
    console.log(strings)
    console.log(strings.length)
    if (name == "Butler" && strings.length === 0) {
        setstrings(
            [
                "LLAMA2: Greetings, Detective. I am Mr. Montgomery, the devoted butler of Ravenscroft " + 
                "Manor. It is my utmost pleasure to assist you in any way possible as you navigate " + 
                "the intricacies of this unfortunate situation. I must admit, the tranquility of the manor " + 
                "has been shattered by this mysterious event. I am at your service to provide any " + 
                "information or insight that may aid in unraveling this perplexing murder."
            ]
        )
    }
    else if ((name == "Edward Greybook" && strings.length === 0)) {
        setstrings(
            [
                "Welcome to Ravenscroft Manor. I am Edward Greybrook, a connoisseur of strategy and an aficionado of the ancient game of chess. " + 
                "Within these grand halls, I navigate life's complexities much like the intricate maneuvers of a well-played game. My mind, a " + 
                "canvas for meticulous planning, seeks the beauty and precision found in every move. Should you wish to uncover the mysteries that " +
                "linger within these walls, perhaps my insights and strategic prowess shagill aid your quest. But beware, for the secrets of this " + 
                "manor run deep, and not all moves on this chessboard lead to victory."
            ]
        )
    }
    else if ((name == "Emily Greybook" && strings.length === 0)) {
        setstrings(
            [
                "Greetings, dear player. I am Emily Greybrook, the daughter of Ravenscroft Manor. Within these sprawling grounds, I embody the essence " + 
                "of grace and poise that befits the estate's lineage. My attire, a testament to timeless elegance, mirrors the aristocratic heritage I " + 
                "represent. Adorned with raven hair cascading like a waterfall, I hold within me an enigmatic array of secrets waiting to be " + 
                "unveiled amidst the mysteries that linger within these grand walls."
            ]
        )
    }



    /**
     * handles the button click
     * we don't need string
     */
    async function handleButtonClick(string) {
        console.log(strings.length % 2 != 1)
        if (strings.length % 2 != 1) {
            // we have already sent llama a request, prevent the user from
            //making more
            return
        }
        const temp = document.getElementById('input');
        const value = temp.value
        temp.value = ""
        setstrings((oldState) => {
            var arr = []
            for (var i = 0; i < oldState.length;i++) {
                arr.push(oldState[i])
            }
            var str = "User: "
            str += value
            arr.push(str)
            return arr
        })
        var response = await (await getCompleation(value, name)).json()
        var parsedString = parseResponse(response)
        setstrings((oldState) => {
            var arr = []
            for (var i = 0; i < oldState.length;i++) {
                arr.push(oldState[i])
            }
            var str = "LLAMA: "
            str += parsedString
            arr.push(str)
            return arr
        })
            
    }

    
        
    return (
        
        <div style={{ backgroundColor: "rgb(105,62,35)", width: "80%", height: "80%"}}>
            <div style={{height: "95%"}}>
                <InterrogationDisplay messages={strings}></InterrogationDisplay>
            </div>
            <div style={{height: "30px", backgroundColor: "white"}}>
                <div style={{width: "87%", height: "100%"}}>
                    <input id="input" type="text" name="name" placeholder="Ask a question." 
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            handleButtonClick()
                        }
                    }} style={{height: "100%"}} />
                    {/* this is cheesing the button into doing what we need, see callback*/}
                    <Button text="submit" id="submit" setMode={handleButtonClick} ></Button>
                </div>
               
            </div>
        </div>
    )
}

export default Interrogation;