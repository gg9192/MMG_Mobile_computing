import React, {useState} from "react";
/**
    @prop name, the name of the suspect
    This is how we communicate with lamma. This is also where we make API calls to LLAMA
    for each character. This is where the magic happens boys
    @returns the component used to interrogate the suspect
*/

const SuspectInterrogation = ({name}) => {
    //if the user has clicked past the introduction slide 
    const [isIntroduced, setisIntroduced] = useState(false);

    makeAPICall()
    
    if (name == "Butler") {
        return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%"}}>
            <img src="./Butler.png"></img>    
        </div>)
    }
    if (name == "Edward Greybrook") {
        
    }
    if (name == "Emily Greybrook") {
        
    }
    if (name == "Samuel Butler") {
        
    }

    /* */
    function makeAPICall() {
        const apiUrl = 'http://localhost:3001/api/';
        const requestMethod = 'POST'
        const requestHeader = {
        'Content-Type': 'application/json',
        };

        const requestBody = {
        "messages": [
            {
            "content": "You are a helpful assistant.",
            "role": "system"
            },
            {
            "content": "What is the capital of France?",
            "role": "user"
            }
        ]
        };

        const requestOptions = {
        method: requestMethod,
        headers: requestHeader,
        body: requestBody
        };



        // Send the HTTP request using the fetch API
        fetch(apiUrl, requestOptions)
        /*
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        */
        .then(data => {
            // Handle the response data here
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }

}
export default SuspectInterrogation;