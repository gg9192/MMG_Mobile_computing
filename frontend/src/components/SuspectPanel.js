import React, {useState} from "react";
import SuspectCard from "./SuspectCard";
import SuspectInterrogation from "./SuspectInterrogation";

/**
 * Builds the initial state
 */
function buildInitialState() {
    const obj = new Object()
    obj.Butler = [
        "LLAMA2: Greetings, Detective. I am Mr. Montgomery, the devoted butler of Ravenscroft " + 
        "Manor. It is my utmost pleasure to assist you in any way possible as you navigate " + 
        "the intricacies of this unfortunate situation. I must admit, the tranquility of the manor " + 
        "has been shattered by this mysterious event. I am at your service to provide any " + 
        "information or insight that may aid in unraveling this perplexing murder."
    ]
    obj.EdwardGreybook = [
        "Welcome to Ravenscroft Manor. I am Edward Greybrook, a connoisseur of strategy and an aficionado of the ancient game of chess. " + 
        "Within these grand halls, I navigate life's complexities much like the intricate maneuvers of a well-played game. My mind, a " + 
        "canvas for meticulous planning, seeks the beauty and precision found in every move. Should you wish to uncover the mysteries that " +
        "linger within these walls, perhaps my insights and strategic prowess shagill aid your quest. But beware, for the secrets of this " + 
        "manor run deep, and not all moves on this chessboard lead to victory."             
    ]
    obj.EmilyGreybook = [
        "Greetings, dear player. I am Emily Greybrook, the daughter of Ravenscroft Manor. Within these sprawling grounds, I embody the essence " + 
        "of grace and poise that befits the estate's lineage. My attire, a testament to timeless elegance, mirrors the aristocratic heritage I " + 
        "represent. Adorned with raven hair cascading like a waterfall, I hold within me an enigmatic array of secrets waiting to be " + 
        "unveiled amidst the mysteries that linger within these grand walls."
    ]
    obj.LadyVictoria = [
    "Welcome to Ravenscroft Manor. I am Lady Victoria, its formidable mistress. Adorned in elegance, I navigate high society's secrets " + 
    "with an enigmatic allure. Beyond the façade lies a burning desire for wealth that propels my ambitions through this labyrinth of " + 
    "intrigue. Beware, for in these walls, secrets whisper and motivations lie buried. Will you dare to unravel the desires that drive us to " + 
    "the edge of ambition?"
    ]
    return obj
}

const init = buildInitialState()

/**
 * We store messages as an object that maps the name of the character to the list of conversations
 * this also figures out if it's the User or the LLM. This is for the arrow function for usestate
 * this is pure (stateless)
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
const SuspectPannel = () => {
    //the state that decides what to display
    const [mode, setMode] = useState("main");
    //the state that holds the conversation
    const [conversationObj, setconversationObj] = useState(init);
    if (mode == "main") {
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
    else if (mode == "accuseWrong") {
        //this is where we accuse an incorrect suspect
        return (
            <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%", 
            display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <strong style = {{fontSize: "2em"}}>You Lose</strong>
                <strong style = {{fontSize: "2em"}}>The correct answer was Lady Victoria</strong>
                <strong style = {{fontSize: "2em"}}>Please reload the page to play again</strong>
            </div>
        )
    }
    else if (mode == "accueseCorrect") {

    }
    else {
        //interrogate suspects
        //list of messages
        var arr
        if (mode == "Butler") {
            arr = conversationObj.Butler
        }
        else if (mode == "Edward Greybook") {
            arr = conversationObj.EdwardGreybook
        }
        else if (mode == "Emily Greybook") {
            arr = conversationObj.EmilyGreybook
        }
        else if (mode == "Lady Victoria") {
            arr = conversationObj.LadyVictoria
        }
        return(<SuspectInterrogation name={mode} messages={arr} setMode={setMode}></SuspectInterrogation>)
    }
    
}
export default SuspectPannel 
;