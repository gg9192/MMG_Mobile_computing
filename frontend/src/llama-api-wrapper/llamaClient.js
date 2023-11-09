//NOTE: This is currently a work in progress

//const apiUrl = 'http://172.30.74.44:8000/v1/chat/completions';
const apiUrl = 'http://localhost:3001/api/completions' //while backend is running to bypass CORS
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
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });