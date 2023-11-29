import React, {useState} from "react"
import Button from "./Button"
import InterrogationDisplay from "./InterrogationDisplay"
import {addMessage} from "./SuspectPanel"
import styles from "../styles/Interrogation.css"
import {getCompleation} from '../llama-api-wrapper/llamaClient';

/**
 * see gpt-doc.txt
 * @prop {string} name the name of the suspect
 * @prop {list of strings} messages the list of messages
 * @prop {function} setconversationObj used to store conversation state
 * @returns 
 */
const Interrogation = ({name, messages, setconversationObj}) => {
    


    /**
     * handles the button click
     * we don't need string
     */
    async function handleButtonClick(string) {
        if (messages.length % 2 != 1) {
            // we have already sent llama a request, prevent the user from
            //making more
            return
        }
        const temp = document.getElementById('input');
        const value = temp.value
        temp.value = ""
        setconversationObj((prevObject) => {
            var obj = addMessage(prevObject, name, value)
            return obj
        })
        var response = await getCompleation(value, name)
        // we don't need to parse response, we can just directly get stuff from it
        const responseText = response.response;
        const parsedMemoriesArray = response.memories;
        setconversationObj((prevObject) => {
            var obj = addMessage(prevObject, name, responseText)
            return obj
        })
            
    }

    
        
    return (
        
        <div style={{ backgroundColor: "rgb(105,62,35)", width: "90%", height: "80%"}}>
            <div style={{height: "95%"}}>
                <InterrogationDisplay messages={messages}></InterrogationDisplay>
            </div>
            <div style={{height: "30px", backgroundColor: "white"}}>
                <div style={{width: "100%", height: "100%", position: "relative"}}>
                    <input id="input" onKeyDown={(e) => {
                        if (e.key == "Enter") {handleButtonClick("")}
                    }} style={{height: "100%"}}></input>
                    {/* this is cheesing the button into doing what we need, see callback*/}
                    <Button text="submit" id="submit" setMode={handleButtonClick} ></Button>
                </div>
               
            </div>
        </div>
    )
}

export default Interrogation;