import { initialState } from '../../../base/initialState';
import { listReducer, detailsReducer } from '../../../base/reducerHelpers';
import {LICENSES_ACTIONS} from '../Actions/actionTypes';

export function LicensesReducers(prevState = initialState.licenses, action) {
    switch (action.baseType) {
        case LICENSES_ACTIONS.LOAD_BY_ID:
        case LICENSES_ACTIONS.UPDATE:
            return detailsReducer(prevState, action);
        case LICENSES_ACTIONS.STORE:
        case LICENSES_ACTIONS.LOAD:
        case LICENSES_ACTIONS.DESTROY:
        case LICENSES_ACTIONS.BATCH_DELETE:
            return listReducer(prevState, action);
        
        default:
            return prevState
    }
}
