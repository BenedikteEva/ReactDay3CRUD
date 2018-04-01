import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import registerServiceWorker from './registerServiceWorker';
import DataFacade from "./dataFacade";

ReactDOM.render(<App facade={DataFacade}/>, document.getElementById('root'));

registerServiceWorker();

