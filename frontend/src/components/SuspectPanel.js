import React from "react";
import SuspectCard from "./SuspectCard";
const SuspectPannel = ({ }) => {
    return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", height: "100%", display: "flex", justifyContent: "center"}}>
            
            <div style={{display: "flex", width: "90%", flexDirection:  "row", alignItems: "center"}}>
                <div style={{ display: "flex", width: "50%", height: "60%", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                    <SuspectCard imagePath={"./butler.png"} name="Butler" description="In the grand manor of Ravenscroft, 
                    Mr. Montgomery is the esteemed butler, a model of unwavering professionalism and discretion. With his 
                    impeccably tailored attire, silver hair, and a demeanor that exudes grace and dignity, he oversees 
                    every detail of the household with unparalleled precision."></SuspectCard>
                    <SuspectCard name="Lady Victoria"></SuspectCard>
                </div>
                <div style={{ alignItems: "center", justifyContent: "space-between", 
                    display: "flex", width: "50%", height: "60%", flexDirection: "column"
                }}><SuspectCard imagePath={"./butler.png"} name="Butler"
                    description="In the grand manor of Ravenscroft, Mr. Montgomery is the esteemed butler, a model 
                    of unwavering professionalism and discretion. With his impeccably tailored attire, silver hair, 
                    and a demeanor that exudes grace and dignity, he oversees every detail of the household with unparalleled 
                    precision.">
                    </SuspectCard>
                    <SuspectCard name="Lady Victoria"></SuspectCard>
                </div>
            </div>
        </div>)
}
export default SuspectPannel 
;