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

    
    
    if (name == "Butler") {
        return (
        <div style={{backgroundColor: "rgb(153, 115, 76)", width: "100%", height: "100%"}}>
            <div style={{height: "100%", width: "40%", display: "flex",flexDirection: "Column", justifyContent: "center", overflow: "hidden"}} >
                <img style={{height: "80%", width: "100%", marginLeft:"-100px",}} src="./Butler.png"></img>
            </div>
            <button onClick={makeAPICall}>makeAPICall</button>    
        </div>)
    }
    if (name == "Edward Greybrook") {
        
    }
    if (name == "Emily Greybrook") {
        
    }
    if (name == "Victoria Greybrook") {
        
    }

    /**
     * 
     * @returns the response from the server as json
     */
    function makeAPICall() {
        const apiUrl = 'http://localhost:3001/api/completions';
        const requestMethod = 'POST'
        const requestHeader = {
        'Content-Type': 'application/json',
        };

        const requestBody = '{"messages": [{"role": "system", "content": "You are a helpful assistant."},{"role": "user", "content": "Help me write a 100 words description of cat"}], "temperature": 0}'   

        const requestOptions = {
        method: requestMethod,
        headers: requestHeader,
        body: requestBody
        };

        var res

        // Send the HTTP request using the fetch API
        fetch(apiUrl, requestOptions)
        .then(function(response) {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()`
            return response.json();
          }).then(function(data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data)
          });
          
    }
}

export default SuspectInterrogation;