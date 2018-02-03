import { CINEMA_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { cinemas } from '../../../base/settings';

export class CinemaActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, CINEMA_ACTIONS.LOAD, cinemas);
    
    loadById = (id) =>
        createAsyncAction(this.dispatch, this.services.loadById, id, CINEMA_ACTIONS.LOAD_BY_ID, cinemas);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, CINEMA_ACTIONS.STORE, cinemas);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, CINEMA_ACTIONS.UPDATE, cinemas);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, CINEMA_ACTIONS.DESTROY, cinemas);
}