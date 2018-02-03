import { HALLS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { halls } from '../../../base/settings';

export class HallsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, HALLS_ACTIONS.LOAD, halls);
    
    loadById = (id) =>
        createAsyncAction(this.dispatch, this.services.loadById, id, HALLS_ACTIONS.LOAD_BY_ID, halls);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, HALLS_ACTIONS.STORE, halls);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, HALLS_ACTIONS.UPDATE, halls);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, HALLS_ACTIONS.DESTROY, halls);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, HALLS_ACTIONS.BATCH_DELETE, halls);
}