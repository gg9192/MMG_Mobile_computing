import React from "react";
import SuspectCard from "./SuspectCard";

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
                        setMode("Emily Graybook")
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
                        setMode("Lady Victoria")
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