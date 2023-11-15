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
const Interrogation = ({name, messages}) => {
    //list of strings that start with either "User" or "LLama2"

    // else if ((name == "Emily Greybook" && messages.length === 0)) {
    //     setstrings(
    //         [
    //             "Greetings, dear player. I am Emily Greybrook, the daughter of Ravenscroft Manor. Within these sprawling grounds, I embody the essence " + 
    //             "of grace and poise that befits the estate's lineage. My attire, a testament to timeless elegance, mirrors the aristocratic heritage I " + 
    //             "represent. Adorned with raven hair cascading like a waterfall, I hold within me an enigmatic array of secrets waiting to be " + 
    //             "unveiled amidst the mysteries that linger within these grand walls."
    //         ]
    //     )
    // }
    // else if ((name == "Lady Victoria" && messages.length === 0)) {
    //     setstrings(
    //         [
    //             "Welcome to Ravenscroft Manor. I am Lady Victoria, its formidable mistress. Adorned in elegance, I navigate high society's secrets " + 
    //             "with an enigmatic allure. Beyond the façade lies a burning desire for wealth that propels my ambitions through this labyrinth of " + 
    //             "intrigue. Beware, for in these walls, secrets whisper and motivations lie buried. Will you dare to unravel the desires that drive us to " + 
    //             "the edge of ambition?"
    //         ]
    //     )
    // }

    


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
        // setstrings((oldState) => {
        //     var arr = []
        //     for (var i = 0; i < oldState.length;i++) {
        //         arr.push(oldState[i])
        //     }
        //     var str = "User: "
        //     str += value
        //     arr.push(str)
        //     return arr
        // })
        var response = await (await getCompleation(value, name)).json()
        var parsedString = parseResponse(response)
        // setstrings((oldState) => {
        //     var arr = []
        //     for (var i = 0; i < oldState.length;i++) {
        //         arr.push(oldState[i])
        //     }
        //     var str = "LLAMA: "
        //     str += parsedString
        //     arr.push(str)
        //     return arr
        // })
            
    }

    
        
    return (
        
        <div style={{ backgroundColor: "rgb(105,62,35)", width: "80%", height: "80%"}}>
            <div style={{height: "95%"}}>
                <InterrogationDisplay messages={messages}></InterrogationDisplay>
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