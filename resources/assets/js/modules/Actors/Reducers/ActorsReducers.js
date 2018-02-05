import { initialState } from '../../../base/initialState';
import {ACTORS_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function ActorsReducer(prevState = initialState.actors, action) {
    switch (action.baseType) {
        case ACTORS_ACTIONS.STORE:
        case ACTORS_ACTIONS.UPDATE:
        case ACTORS_ACTIONS.LOAD:
        case ACTORS_ACTIONS.DESTROY:
        case ACTORS_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
