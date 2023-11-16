import React, {useState} from "react";
import Interrogation from "./Interrogation"
import Button from "./Button";
/**
    @prop {string} name, the name of the suspect
    @prop {function} setMode the setMode of the suspect panel
    @prop {function} setconversationObj the setconversationObj of the suspect panel
    This is how we communicate with lamma. This is also where we make API calls to LLAMA
    for each character. This is where the magic happens boys
    @returns the component used to interrogate the suspect
*/
const SuspectInterrogation = ({name, setMode, messages, setconversationObj}) => {
    if (name == "Butler") {
        return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "40%"}} >
                <div style={{width: "100%", height: "70%", display: "flex",flexDirection: "Column", justifyContent: "center", alignItems: "center"}}>
                    <img src ="butler.png" style={{height: "80%", width: "50%"}}></img>
                </div>
                <div style={{width: "100%", height: "30%", display: "flex",flexDirection: "row", alignItems: "center"}}>
                    <div style={{position: "absolute", marginTop: "-220px", marginLeft: "80px"}}>
                        <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                    </div>
                    <div style={{position: "absolute", marginTop: "-30px", marginLeft: "110px"}}>
                        <Button text="Back" setMode={setMode} setString="main"></Button>
                    </div>
                </div>
            </div>
            <div style={{width: "60%", display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
                <Interrogation name="Butler" messages={messages} setconversationObj={setconversationObj}></Interrogation>    
            </div>  
        </div>)
    }
    if (name == "Edward Greybook") {
        return (
            <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
                <div style={{height: "100%", width: "40%"}} >
                    <div style={{width: "100%", height: "70%", display: "flex",flexDirection: "Column", justifyContent: "center", alignItems: "center"}}>
                        <img src ="Edward-Greybook.png" style={{height: "80%", width: "50%"}}></img>
                    </div>
                    <div style={{width: "100%", height: "30%", display: "flex",flexDirection: "row", alignItems: "center"}}>
                        <div style={{position: "absolute", marginTop: "-220px", marginLeft: "80px"}}>
                            <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                        </div>
                        <div style={{position: "absolute", marginTop: "-30px", marginLeft: "110px"}}>
                            <Button text="Back" setMode={setMode} setString="main"></Button>
                        </div>
                    </div>
                </div>
                <div style={{width: "60%", display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
                    <Interrogation name="Edward Greybook" messages={messages} setconversationObj={setconversationObj}></Interrogation>    
                </div>  
            </div>)
    }
    if (name == "Emily Greybook") {
        return (
            <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
                <div style={{height: "100%", width: "40%"}} >
                    <div style={{width: "100%", height: "70%", display: "flex",flexDirection: "Column", justifyContent: "center", alignItems: "center"}}>
                        <img src ="Emily-Greybook.png" style={{height: "80%", width: "40%"}}></img>
                    </div>
                    <div style={{width: "100%", height: "30%", display: "flex",flexDirection: "row", alignItems: "center"}}>
                        <div style={{position: "absolute", marginTop: "-220px", marginLeft: "80px"}}>
                            <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                        </div>
                        <div style={{position: "absolute", marginTop: "-30px", marginLeft: "110px"}}>
                            <Button text="Back" setMode={setMode} setString="main"></Button>
                        </div>
                    </div>
                </div>
                <div style={{width: "60%", display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
                    <Interrogation name="Emily Greybook" messages={messages} setconversationObj={setconversationObj}></Interrogation>    
                </div>  
            </div>)
    }
    if (name == "Lady Victoria") {
        return (
            <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
                <div style={{height: "100%", width: "40%"}} >
                    <div style={{width: "100%", height: "70%", display: "flex",flexDirection: "Column", justifyContent: "center", alignItems: "center"}}>
                        <img src ="lady-victoria.png" style={{height: "80%", width: "50%"}}></img>
                    </div>
                    <div style={{width: "100%", height: "30%", display: "flex",flexDirection: "row", alignItems: "center"}}>
                        <div style={{position: "absolute", marginTop: "-220px", marginLeft: "80px"}}>
                            <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                        </div>
                        <div style={{position: "absolute", marginTop: "-30px", marginLeft: "110px"}}>
                            <Button text="Back" setMode={setMode} setString="main"></Button>
                        </div>
                    </div>
                </div>
                <div style={{width: "60%", display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
                    <Interrogation name="Edward Greybook" messages={messages} setconversationObj={setconversationObj}></Interrogation>    
                </div>  
            </div>)
    }
}

export default SuspectInterrogation;