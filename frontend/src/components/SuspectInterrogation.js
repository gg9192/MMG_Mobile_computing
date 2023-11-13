import React, {useState} from "react";
import Interrogation from "./Interrogation"
import Button from "./Button";
/**
    @prop name, the name of the suspect
    @prop setMode the setMode of 
    This is how we communicate with lamma. This is also where we make API calls to LLAMA
    for each character. This is where the magic happens boys
    @returns the component used to interrogate the suspect
*/

const SuspectInterrogation = ({name, setMode}) => {    
    if (name == "Butler") {
        return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "29%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{position: "absolute", height: "40%", width: "25%", marginLeft:"-40px",marginTop: "-170px"}} src="./Butler.png"></img>
                <div style={{position: "absolute", marginTop: "220px", marginLeft: "80px"}}>
                    <Button text="Accuse" setMode={setMode} setString="accuseButler"></Button>
                </div>
                <div style={{position: "absolute", marginTop: "400px", marginLeft: "110px"}}>
                    <Button text="Back" setMode={setMode} setString="main"></Button>
                </div>
            </div>
            <div style={{width: "71%", display: "flex", flexDirection: "rows", justifyContent: "center", alignItems: "center"}}>
                <Interrogation name="Butler"></Interrogation>    
            </div>  
        </div>)
    }
    if (name == "Edward Greybrook") {
        
    }
    if (name == "Emily Greybrook") {
        
    }
    if (name == "Victoria Greybrook") {
        
    }
}

export default SuspectInterrogation;