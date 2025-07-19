import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="description" content="couresa capstone project"/>
    <meta name="og:title" content="Little Lemon Webiste"/>
    <meta name="og:description" content="Come dine at this one of a kind place!"/>
    <meta name="og:image" content="https://images.squarespace-cdn.com/content/v1/67103c066422782526fbfe18/fe6943f5-1a9a-4119-9a05-acdce564a938/transparent+logo.png?format=1500w"/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
