import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { Card } from 'antd';
import { LoginForm, RegisterForm, ResetForm } from '../Components';

export class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/auth" component={LoginForm} />
                <Route path="/auth/register" component={RegisterForm} />
                <Route path="/auth/reset" component={ResetForm} />
            </Switch>
        );
    }
}