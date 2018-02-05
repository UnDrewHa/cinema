import { initialState } from '../../../base/initialState';
import { listReducer, detailsReducer } from '../../../base/reducerHelpers';
import {HALLS_ACTIONS} from '../Actions/actionTypes';

export function HallsReducer(prevState = initialState.halls, action) {
    switch (action.baseType) {
        case HALLS_ACTIONS.LOAD_BY_ID:
        case HALLS_ACTIONS.UPDATE:
            return detailsReducer(prevState, action);
        case HALLS_ACTIONS.STORE:
        case HALLS_ACTIONS.LOAD:
        case HALLS_ACTIONS.DESTROY:
        case HALLS_ACTIONS.BATCH_DELETE:
            return listReducer(prevState, action);
        
        default:
            return prevState
    }
}
