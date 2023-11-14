import React from "react"
import styles from "../styles/Loading.css"

/**
 * @returns the component that shows that we are fetching a response
 */
const Loading = ({}) => {

    return (
        <div style={{backgroundColor: "rgb(156, 102, 68)"}}>
            <div class="lds-ellipsis">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )

}

export default Loading;