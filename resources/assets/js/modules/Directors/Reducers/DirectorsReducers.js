import { initialState } from '../../../base/initialState';
import {DIRECTORS_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function DirectorsReducer(prevState = initialState.directors, action) {
    switch (action.baseType) {
        case DIRECTORS_ACTIONS.STORE:
        case DIRECTORS_ACTIONS.UPDATE:
        case DIRECTORS_ACTIONS.LOAD:
        case DIRECTORS_ACTIONS.DESTROY:
        case DIRECTORS_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
