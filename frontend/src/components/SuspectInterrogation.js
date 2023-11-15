import React, {useState} from "react";
import Interrogation from "./Interrogation"
import Button from "./Button";
/**
    @prop {string} name, the name of the suspect
    @prop {function}setMode the setMode of 
    This is how we communicate with lamma. This is also where we make API calls to LLAMA
    for each character. This is where the magic happens boys
    @returns the component used to interrogate the suspect
*/

const SuspectInterrogation = ({name, setMode}) => {    
    if (name == "Butler") {
        return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "29%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{position: "absolute", height: "40%", width: "25%", marginLeft:"30px",marginTop: "-170px"}} src="./Butler.png"></img>
                <div style={{position: "absolute", marginTop: "220px", marginLeft: "80px"}}>
                    <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
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
    if (name == "Edward Greybook") {
        return (<div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "29%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{position: "absolute", height: "38%", width: "19%", marginLeft:"30px",marginTop: "-170px"}} src="./Edward-Greybook.png"></img>
                <div style={{position: "absolute", marginTop: "220px", marginLeft: "80px"}}>
                    <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                </div>
                <div style={{position: "absolute", marginTop: "400px", marginLeft: "110px"}}>
                    <Button text="Back" setMode={setMode} setString="main"></Button>
                </div>
            </div>
            <div style={{width: "71%", display: "flex", flexDirection: "rows", justifyContent: "center", alignItems: "center"}}>
                <Interrogation name="Edward Greybook"></Interrogation>    
            </div>  
        </div>)
    }
    if (name == "Emily Greybook") {
        return (<div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "29%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{position: "absolute", height: "38%", width: "19%", marginLeft:"30px",marginTop: "-170px"}} src="./Emily-Greybook.png"></img>
                <div style={{position: "absolute", marginTop: "220px", marginLeft: "80px"}}>
                    <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                </div>
                <div style={{position: "absolute", marginTop: "400px", marginLeft: "110px"}}>
                    <Button text="Back" setMode={setMode} setString="main"></Button>
                </div>
            </div>
            <div style={{width: "71%", display: "flex", flexDirection: "rows", justifyContent: "center", alignItems: "center"}}>
                <Interrogation name="Emily Greybook"></Interrogation>    
            </div>  
        </div>)
    }
    if (name == "Lady Victoria") {
        return (<div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", display: "flex", flexDirection: "columns"}}>
            <div style={{height: "100%", width: "29%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{position: "absolute", height: "38%", width: "19%", marginLeft:"-10px",marginTop: "-170px"}} src="./lady-victoria.png"></img>
                <div style={{position: "absolute", marginTop: "220px", marginLeft: "80px"}}>
                    <Button text="Accuse" setMode={setMode} setString="accuseWrong"></Button>
                </div>
                <div style={{position: "absolute", marginTop: "400px", marginLeft: "110px"}}>
                    <Button text="Back" setMode={setMode} setString="main"></Button>
                </div>
            </div>
            <div style={{width: "71%", display: "flex", flexDirection: "rows", justifyContent: "center", alignItems: "center"}}>
                <Interrogation name="Lady Victoria"></Interrogation>    
            </div>  
        </div>)
    }
}

export default SuspectInterrogation;