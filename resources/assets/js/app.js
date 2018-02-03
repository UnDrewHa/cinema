import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Main } from './modules/Main/Pages/Main';
import { rootReducer } from './base/rootReducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const App = () => {
    return (
        <Route path="/" component={Main} />
    );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
