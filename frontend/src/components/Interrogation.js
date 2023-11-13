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
    const [strings, setstrings] = useState([]);
    console.log(name)
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

    /**
     * This adds the following string to the strings list
     * @param string the string to add
     * 
     */
    function addText(string) {
        console.log("made it" + string)
        if (strings.length % 2 == 0) {
            //llama
            var newstring = "LLAMA2: " + string
            var arr = []
            for (var i = 0; i < strings.length; i += 1) {
                arr.push(strings[i])
            }
            arr.push(newstring)
            setstrings(arr)
        }
        else {
            //llama
            var newstring = "User: " + string
            var arr = []
            for (var i = 0; i < strings.length; i += 1) {
                arr.push(strings[i])
            }
            arr.push(newstring)
            setstrings(arr)
        }
        console.log(arr)
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
        addText(value)
        var response = await (await getCompleation(value, "butler")).json()
        var parsedString = parseResponse(response)
        addText(parsedString)
            
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