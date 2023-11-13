import React from "react"
import styles from "../styles/Loading.css"

/**
 * @prop messages the list of messages (looks like stipes with text)
 * @returns the jsx to make it happen
 */
const Loading = ({messages}) => {

    return (
        <div style={{display: "flex", flexDirection: "row", backgjustifyContent: "center", alignContent: "center", alignItems: "center", width: "100%", height:"30px", backgroundColor: "rgb(156,102,68)"}}>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )

}

export default Loading;