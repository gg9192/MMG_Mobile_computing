import React, {useState} from "react"
import Button from "./Button"
import InterrogationDisplay from "./InterrogationDisplay"
import styles from "../styles/Interrogation.css"
import {getCompleation} from '../llama-api-wrapper/llamaClient';

/**
 * 
 * @prop the name of the suspect
 * @returns 
 */
const Interrogation = ({name}) => {
    const [strings, setstrings] = useState([]);

    /**
     * This adds the following string to the strings list
     * @param string the string to add
     * 
     */
    function addText(string) {
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
    }

    /**
     * handles the button click
     * we don't need string
     */
    async function handleButtonClick(string) {
        const temp = document.getElementById('input');
        const value = temp.value
        addText(value)
        var response = await (await getCompleation(value, "butler")).json()
        console.log(response)
            
    }

    function parseResponse(response) {
        console.log(response)
        const parsedResponse = JSON.parse(response);
        const messages = parsedResponse.choices[0].message.content.split("\n\n");
        return messages;
      }
        
    return (
        
        <div style={{ backgroundColor: "rgb(105,62,35)", width: "80%", height: "80%"}}>
            <div style={{height: "95%"}}>
                <InterrogationDisplay messages={strings}></InterrogationDisplay>
            </div>
            <div style={{height: "30px", backgroundColor: "white"}}>
                <div style={{width: "87%", height: "100%"}}>
                    <input id="input" type="text" name="name" placeholder="Ask a question." style={{height: "100%"}} />
                    {/* this is cheesing the button into doing what we need, see callback*/}
                    <Button text="submit" id="submit" setMode={handleButtonClick} ></Button>
                </div>
               
            </div>
        </div>
    )
}

export default Interrogation;