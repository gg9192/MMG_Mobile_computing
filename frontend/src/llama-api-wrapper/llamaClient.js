//NOTE: This file is currently a work in progress

const apiUrl = 'https://api.openai.com/v1/completions';



/*
 * Google Bard
 * explain async await js in simple terms, include code and comments
Sure, here is an explanation of async/await in JavaScript in simple terms, including code and comments:

What are async and await?

Async and await are keywords in JavaScript that are used to write asynchronous code. Asynchronous code is code that takes some time to complete, such as fetching data from a server or performing a calculation.

The async keyword is used to mark a function as asynchronous. This means that the function can return a promise, which is an object that represents the eventual completion (or failure) of an asynchronous operation.

The await keyword is used to wait for a promise to settle. This means that the code execution will pause until the promise is either resolved (meaning the operation was successful) or rejected (meaning the operation failed).

Why use async/await?

Async/await makes it easier to write asynchronous code in JavaScript. Before async/await, asynchronous code was often written using callbacks or promises. Callbacks are functions that are passed as arguments to other functions, and they are called when the asynchronous operation completes. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.

Async/await makes asynchronous code more readable and easier to debug. It also makes it possible to write asynchronous code that looks like synchronous code.

Here is an example of how to use async/await:

JavaScript
async function fetchUserData(userId) {
  // Fetch the user data from the server
  const response = await fetch(`https://api.example.com/users/${userId}`);

  // Check if the request was successful
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.status}`);
  }

  // Parse the JSON response
  const userData = await response.json();

  // Return the user data
  return userData;
}
Use code with caution. Learn more
This code will fetch the user data from the server and then return it. The await keyword is used to wait for the fetch() and json() promises to settle.

Here is an example of how to use async/await to chain promises:

JavaScript
async function fetchAndDisplayUserData(userId) {
  try {
    // Fetch the user data from the server
    const userData = await fetchUserData(userId);

    // Display the user data
    console.log(userData);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
Use code with caution. Learn more
This code will fetch the user data from the server and then display it in the console. The try/catch block is used to catch any errors that occur during the asynchronous operation.

I hope this explanation is helpful. Please let me know if you have any other questions.

profile picture
can you just call it like a normal function?
View other drafts




















Yes, you can call an async function like a normal function. However, if you do so, the function will not wait for the asynchronous operation to complete before returning. This means that the function will return a promise, and you will need to use the await keyword to wait for the promise to settle.

For example, the following code will call the fetchUserData() function like a normal function:

JavaScript
const userData = fetchUserData(123);
console.log(userData);
Use code with caution. Learn more
This code will print the following output to the console:

Promise { <pending> }
This is because the fetchUserData() function is still running, and it has not yet returned the user data. To wait for the user data to be returned, you can use the await keyword:

JavaScript
async function main() {
  const userData = await fetchUserData(123);
  console.log(userData);
}

main();
Use code with caution. Learn more
This code will print the following output to the console:

{
  "id": 123,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
This is because the await keyword will wait for the fetchUserData() promise to settle before returning.
 */
/** 
 * @param {string} prompt the string from the UI
 * gets the compleation for the given character
 * Returns a promise
*/
export async function getCompleation(prompt, character) {
  const characterList = ["Butler", "Lady Victoria", "Emily Greybrook", "Edward Greybrook"];
  // check if given character is valid
  if (!characterList.includes(character)) {
    throw new Error("character given not valid!")
  }
  
  return completion(prompt)
  }



  export function parseResponse(response) {
    return response.choices[0].message.content
  }

  function buildPrompt(prompt) {
      return '{ "userQuestion" : "what makes life worth living", "memories" : ["The game of life is a game ofja everlasting learning", "The unexamined life is not worth living", "Never stop learning"], "character" : "Butler " }';
  }



/**
 * Attempts to send a prompt to backend for completion
 * 
 * @param {String} prompt - a prompt for backend to send to .
 * @returns {Response} a response from backend
 */
async function completion(prompt) {
    const requestBody = prompt
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: requestBody
    };
  
  return await fetch("localhost:3001/API/getCompleationForCharacter",requestOptions)
}
