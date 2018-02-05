import { ACTORS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { actors } from '../../../base/settings';

export class ActorsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, ACTORS_ACTIONS.LOAD, actors);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, ACTORS_ACTIONS.STORE, actors);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, ACTORS_ACTIONS.UPDATE, actors);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, ACTORS_ACTIONS.DESTROY, actors);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, ACTORS_ACTIONS.BATCH_DELETE, actors);
}