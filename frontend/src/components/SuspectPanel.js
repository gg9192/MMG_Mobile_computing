import React from "react";
import SuspectCard from "./SuspectCard";
const SuspectPannel = ({ }) => {
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
                    <SuspectCard imagePath={"./butler.png"} name="Butler" description="In the grand manor of Ravenscroft, 
                    Mr. Montgomery is the esteemed butler, a model of unwavering professionalism and discretion. With his 
                    impeccably tailored attire, silver hair, and a demeanor that exudes grace and dignity, he oversees 
                    every detail of the household with unparalleled precision."></SuspectCard>
                    <SuspectCard name="Lady Victoria"></SuspectCard>
                </div>
                <div style={{ alignItems: "center", justifyContent: "space-between", 
                    display: "flex", width: "50%", height: "65%", flexDirection: "column"
                }}><SuspectCard imagePath={"./lady-victoria.png"} name="Lady Victoria"
                        description="In the grand manor of Ravenscroft, Lady Victoria reigns as its formidable mistress, 
                        a paragon of aristocratic refinement and intrigue. With her exquisite gowns, enigmatic allure, 
                        and a presence that commands attention, she navigates the high society's labyrinth of secrets 
                        with a discerning eye.">
                    </SuspectCard>
                    <SuspectCard name=""></SuspectCard>
                </div>
            </div>
        </div>)
}
export default SuspectPannel 
;