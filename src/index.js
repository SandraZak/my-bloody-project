import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';


const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}


/*
const appInit = () => {
    const appElements = document.querySelectorAll('#app');
    if( appElements && appElements.length ){
        ReactDOM.render( <App />, appElements[0] );
    }
};

document.addEventListener('DOMContentLoaded', appInit);
*/
