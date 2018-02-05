import { initialState } from '../../../base/initialState';
import {AGE_LIMITS_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function AgeLimitsReducers(prevState = initialState.ageLimits, action) {
    switch (action.baseType) {
        case AGE_LIMITS_ACTIONS.STORE:
        case AGE_LIMITS_ACTIONS.UPDATE:
        case AGE_LIMITS_ACTIONS.LOAD:
        case AGE_LIMITS_ACTIONS.DESTROY:
        case AGE_LIMITS_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
