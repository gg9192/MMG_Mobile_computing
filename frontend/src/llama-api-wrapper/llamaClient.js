//NOTE: This file is currently a work in progress

const apiUrl = 'http://localhost:3001/api/completions';



/**
 * Attempts to send a prompt to llama for completion
 * 
 * @param {String} prompt - a prompt for llama to provide a completion for.
 * @returns {String} a response for the prompt.
 * @throws {Error} indicating a network error.
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

    //FIXME: borked handling of response
    const response = fetch(apiUrl, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
};



/**
 * sends llama a list of completions
 */
function chatCompletions() {
    //TODO: implement this function
};

const response = completion("What is the capital of France")
console.log(response);