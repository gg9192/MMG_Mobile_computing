//NOTE: This file is currently a work in progress

const apiUrl = 'http://localhost:3001/api/completions';



/**
 * Attempts to send a prompt to llama for completion
 * 
 * @param {String} prompt - a prompt for llama to provide a completion for.
 * @returns {Response} a response for the prompt.
 */
function completion(prompt) {

    const requestBody = {
        "prompt": prompt
    };

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(requestBody)
    };

    return fetch(apiUrl, requestOptions)
}



/**
 * sends llama a list of completions
 */
function chatCompletions() {
    //TODO: implement this function
}