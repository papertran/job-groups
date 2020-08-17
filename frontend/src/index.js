import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reducers from './reducers';
import { persistedState, saveToLocalStorage } from './modules/localStorage';

//Store for Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

// store.subscribe(() => saveToLocalStorage(store.getState()));
store.subscribe(() => saveToLocalStorage({ group: store.getState().group }));

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);
