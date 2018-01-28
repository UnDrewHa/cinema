import { AUTH_LOGIN, AUTH_REGISTER, AUTH_RESET } from './actionTypes';
import { createAsyncAction } from '../../../core/createAsyncAction'

export class AuthActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    login = (data) =>
        createAsyncAction(this.dispatch, this.services.login, data, AUTH_LOGIN);

    register = (data) =>
        createAsyncAction(this.dispatch, this.services.register, data, AUTH_REGISTER);
}