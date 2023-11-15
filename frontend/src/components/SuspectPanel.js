import React from "react";
import SuspectCard from "./SuspectCard";


/**
 * We store messages as an object that maps the name of the character to the list of conversations
 * this also figures out if it's the User or the LLM. This is 
 * @param {object} prevObject 
 * @param {string} character 
 * @param {string} message 
 */
export function addMessage(prevObject, character, message) {
    const obj = new Object()
    if (character == "Butler") {
        obj.EdwardGreybook = prevObject.EdwardGreybook
        obj.EmilyGreybook = prevObject.EmilyGreybook
        obj.LadyVictoria = prevObject.LadyVictoria
        if (prevObject.Butler.length % 2 == 0) {
            //it's GPTs turn
            var str = "GPT: " + message
            prevObject.Butler.push(str)
        }
        else {
            //its the users turn
            var str = "User: " + message
            prevObject.Butler.push(str)
        }
        obj.Butler = prevObject.Butler
        return obj
    }
    else if (character == "Edward Greybook") {
        obj.EmilyGreybook = prevObject.EmilyGreybook
        obj.LadyVictoria = prevObject.LadyVictoria
        obj.Butler = prevObject.Butler
        if (prevObject.Butler.length % 2 == 0) {
            //it's GPTs turn
            var str = "GPT: " + message
            prevObject.EdwardGreybook.push(str)
        }
        else {
            //its the users turn
            var str = "User: " + message
            prevObject.EdwardGreybook.push(str)
        }
        obj.EdwardGreybook = prevObject.EdwardGreybook
        return obj
    }
    else if (character == "Emily Greybook") {
        obj.EdwardGreybook = prevObject.EdwardGreybook
        obj.LadyVictoria = prevObject.LadyVictoria
        obj.Butler = prevObject.Butler
        if (prevObject.Butler.length % 2 == 0) {
            //it's GPTs turn
            var str = "GPT: " + message
            prevObject.EmilyGreybook.push(str)
        }
        else {
            //its the users turn
            var str = "User: " + message
            prevObject.EmilyGreybook.push(str)
        }
        obj.EmilyGreybook = prevObject.EmilyGreybook
        return obj
    }
    else if (character == "Lady Victoria") {
        obj.EdwardGreybook = prevObject.EdwardGreybook
        obj.EmilyGreybook = prevObject.EmilyGreybook
        obj.Butler = prevObject.Butler
        if (prevObject.Butler.length % 2 == 0) {
            //it's GPTs turn
            var str = "GPT: " + message
            prevObject.LadyVictoria.push(str)
        }
        else {
            //its the users turn
            var str = "User: " + message
            prevObject.LadyVictoria.push(str)
        }
        obj.LadyVictoria = prevObject.LadyVictoria
        return obj
    }

}


/** 
 * see ~/documentation/gpt-doc.txt
 * @param {function} setMode the set mode function of the game component
 * @Returns the group of suspect cards in the 4*4 grid
*/
const SuspectPannel = ({setMode}) => {

    return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", height: "100%", display: "flex", 
            justifyContent: "center"}}>
            <div>
                <strong style={{position: "absolute", paddingLeft: "220px", paddingTop: "20px"
                , fontSize: "3em"}}>Choose a suspect to interrogate</strong>
            </div>
            <div style={{display: "flex", width: "95%", flexDirection:  "row", alignItems: "center"}}>
                <div style={{ display: "flex", width: "50%", height: "65%", flexDirection: "column", alignItems: "center", 
                justifyContent: "space-between"}}>
                    <div onClick={() => {
                        setMode("Butler")
                    }}>
                        <SuspectCard imagePath={"./butler.png"} name="Butler" description="In the grand manor of Ravenscroft, 
                        Mr. Montgomery is the esteemed butler, a model of unwavering professionalism and discretion. With his 
                        impeccably tailored attire, silver hair, and a demeanor that exudes grace and dignity, he oversees 
                        every detail of the household with unparalleled precision."></SuspectCard>
                    </div>
                    <div onClick={() => {
                        setMode("Emily Greybook")
                    }}>
                        <SuspectCard imagePath={"./Emily-Greybook.png"}  name="Emily Greybook (daughter)" description="In the grand 
                        manor of Ravenscroft, Emily Greybrook assumes her role as the daughter of the estate, a vision of grace and 
                        poise amidst the sprawling grounds. Her attire reflects the timeless elegance of the aristocracy, her raven 
                        hair cascading like a waterfall of secrets." ></SuspectCard>
                    </div>
                </div>
                <div style={{ alignItems: "center", justifyContent: "space-between", 
                    display: "flex", width: "50%", height: "65%", flexDirection: "column"
                }}>
                    <div onClick={() => {
                        setMode("Lady Victoria")
                    }}>
                        <SuspectCard imagePath={"./Lady-Victoria.png"} name="Lady Victoria (wife)"
                        description="In the grand manor of Ravenscroft, Lady Victoria reigns as its formidable mistress, 
                        a paragon of aristocratic refinement and intrigue. With her exquisite gowns, enigmatic allure, 
                        and a presence that commands attention, she navigates the high society's labyrinth of secrets 
                        with a discerning eye.">
                        </SuspectCard >
                    </div>
                    <div onClick={() => {
                        setMode("Edward Greybook")
                    }}>
                        <SuspectCard imagePath={"./Edward-Greybook.png"} name="Edward Greybook (Son)" description="In the grand 
                        manor of Ravenscroft, Edward Greybrook stands as the enigmatic son, a master of strategy who enjoys the ancient 
                        game of chess. With his sharp intellect and a penchant for meticulous planning, he is as enigmatic as the 
                        intricate chessboard he often studies. "></SuspectCard>
                    </div>
                </div>
            </div>
        </div>)
}
export default SuspectPannel 
;