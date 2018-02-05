import { DIRECTORS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { directors } from '../../../base/settings';

export class DirectorsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, DIRECTORS_ACTIONS.LOAD, directors);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, DIRECTORS_ACTIONS.STORE, directors);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, DIRECTORS_ACTIONS.UPDATE, directors);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, DIRECTORS_ACTIONS.DESTROY, directors);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, DIRECTORS_ACTIONS.BATCH_DELETE, directors);
}