import { GENRES_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { genres } from '../../../base/settings';

export class GenresActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, GENRES_ACTIONS.LOAD, genres);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, GENRES_ACTIONS.STORE, genres);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, GENRES_ACTIONS.UPDATE, genres);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, GENRES_ACTIONS.DESTROY, genres);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, GENRES_ACTIONS.BATCH_DELETE, genres);
}