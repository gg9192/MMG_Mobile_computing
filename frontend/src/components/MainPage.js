import React, {useState} from "react"
import styles from "../styles/Conversation.module.css";

const MainPage = () => {

    var a = getWindowSize()
    const [windowSize, setWindowsize] = useState(a);
    /* 
        Gets the windowsize
        bard
        To get the size of the browser window in JavaScript, you can use the following code:
        JavaScript
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    */
    function getWindowSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return {width,height};
    }

    var size = [window.width, window.height];  //public variable
    window.resize(function () {
        window.resizeTo(size[0], size[1]);
    });


    function handleResize() {
        var a = getWindowSize()
        console.log(a)
        setWindowsize(a)

    }

    window.addEventListener('resize', handleResize)
    //responsible for the main menu 
    return (
        <div id="root">
            <img src="MainPageBkg.jpg"  width={windowSize[0]} height={windowSize[1]}></img>
        </div>
    )
}
export default MainPage;