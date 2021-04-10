import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Datalayer } from './components/datalayer';
import reducer, { initialstate } from './components/reducer';


ReactDOM.render(
  <React.StrictMode>
    <Datalayer initialstate={initialstate} reducer={reducer}>
    <App />
    </Datalayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
