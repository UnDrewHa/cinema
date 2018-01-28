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
import { Layout } from 'antd';
import { Auth } from './modules/Auth/Pages/Auth';
import { AuthReducer } from './modules/Auth/Reducers/AuthReducers';

const loggerMiddleware = createLogger();

const store = createStore(
    AuthReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/auth" />} />
            <Route path="/auth" component={Auth} />
        </Switch>
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
