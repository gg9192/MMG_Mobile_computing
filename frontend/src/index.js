import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App ></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// GPT api stuff
// importing Configuration and OpenAIApi modules from openai package
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

// create a new configuration object and pass api key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// create new openai object to generate responses to prompts
const openai = new OpenAIApi(configuration);