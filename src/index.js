import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(todoApp);

store.subscribe(() => {
    console.log(store.getState())
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
