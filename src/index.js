import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById("app");
if (rootElement){
  ReactDOM.hydrate(<App />, rootElement);
}
