import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todoApp from './reducers'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
