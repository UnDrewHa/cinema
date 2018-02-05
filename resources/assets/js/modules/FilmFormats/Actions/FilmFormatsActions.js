import { FILM_FORMATS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { filmFormats } from '../../../base/settings';

export class FilmFormatsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, FILM_FORMATS_ACTIONS.LOAD, filmFormats);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, FILM_FORMATS_ACTIONS.STORE, filmFormats);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, FILM_FORMATS_ACTIONS.UPDATE, filmFormats);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, FILM_FORMATS_ACTIONS.DESTROY, filmFormats);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, FILM_FORMATS_ACTIONS.BATCH_DELETE, filmFormats);
}