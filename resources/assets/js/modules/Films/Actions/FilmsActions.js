import { FILMS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { films } from '../../../base/settings';

export class FilmsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, FILMS_ACTIONS.LOAD, films);
    
    loadById = (id) =>
        createAsyncAction(this.dispatch, this.services.loadById, id, FILMS_ACTIONS.LOAD_BY_ID, films);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, FILMS_ACTIONS.STORE, films);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, FILMS_ACTIONS.UPDATE, films);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, FILMS_ACTIONS.DESTROY, films);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, FILMS_ACTIONS.BATCH_DELETE, films);
}