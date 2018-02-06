import { LICENSES_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { licenses } from '../../../base/settings';

export class LicensesActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, LICENSES_ACTIONS.LOAD, licenses);
    
    loadById = (id) =>
        createAsyncAction(this.dispatch, this.services.loadById, id, LICENSES_ACTIONS.LOAD_BY_ID, licenses);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, LICENSES_ACTIONS.STORE, licenses);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, LICENSES_ACTIONS.UPDATE, licenses);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, LICENSES_ACTIONS.DESTROY, licenses);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, LICENSES_ACTIONS.BATCH_DELETE, licenses);
}