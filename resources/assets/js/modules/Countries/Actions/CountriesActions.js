import { COUNTRIES_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { countries } from '../../../base/settings';

export class CountriesActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, COUNTRIES_ACTIONS.LOAD, countries);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, COUNTRIES_ACTIONS.STORE, countries);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, COUNTRIES_ACTIONS.UPDATE, countries);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, COUNTRIES_ACTIONS.DESTROY, countries);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, COUNTRIES_ACTIONS.BATCH_DELETE, countries);
}