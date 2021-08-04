import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Message from './Message';
import reportWebVitals from './reportWebVitals';

const someMessage = "Super mega message to expose!!!";

ReactDOM.render(
  <React.StrictMode>
    <App message={ someMessage }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
