import { AGE_LIMITS_ACTIONS } from './actionTypes';
import { createAsyncAction } from '../../../base/createAsyncAction';
import { ageLimits } from '../../../base/settings';

export class AgeLimitsActions {
    constructor(services, dispatch) {
        this.services = services;
        this.dispatch = dispatch;
    }
    
    load = () =>
        createAsyncAction(this.dispatch, this.services.load, null, AGE_LIMITS_ACTIONS.LOAD, ageLimits);
    
    store = (data) =>
        createAsyncAction(this.dispatch, this.services.store, data, AGE_LIMITS_ACTIONS.STORE, ageLimits);
    
    update = (data) =>
        createAsyncAction(this.dispatch, this.services.update, data, AGE_LIMITS_ACTIONS.UPDATE, ageLimits);
    
    destroy = (id) =>
        createAsyncAction(this.dispatch, this.services.destroy, id, AGE_LIMITS_ACTIONS.DESTROY, ageLimits);
    
    batchDelete = (data) =>
        createAsyncAction(this.dispatch, this.services.batchDelete, data, AGE_LIMITS_ACTIONS.BATCH_DELETE, ageLimits);
}