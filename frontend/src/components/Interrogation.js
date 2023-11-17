import React, {useState} from "react"
import Button from "./Button"
import InterrogationDisplay from "./InterrogationDisplay"
import {addMessage} from "./SuspectPanel"
import styles from "../styles/Interrogation.css"
import {getCompleation, parseResponse} from '../llama-api-wrapper/llamaClient';

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
        console.log("clickeds")
        if (messages.length % 2 != 1) {
            // we have already sent llama a request, prevent the user from
            //making more
            return
        }
        const temp = document.getElementById('input');
        const value = temp.value
        temp.value = ""
        setconversationObj((prevObject) => {
            console.log("in arrow")
            var obj = addMessage(prevObject, name, value)
            return obj
        })
        var response = await (await getCompleation(value, name)).json()
        var parsedString = parseResponse(response)
        setconversationObj((prevObject) => {
            var obj = addMessage(prevObject, name, parsedString)
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
                
                    {/* this is cheesing the button into doing what we need, see callback*/}
                    <Button text="submit" id="submit" setMode={handleButtonClick} ></Button>
                </div>
               
            </div>
        </div>
    )
}

export default Interrogation;