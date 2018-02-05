import { initialState } from '../../../base/initialState';
import { baseReducer } from '../../../base/reducerHelpers';
import {CINEMA_ACTIONS} from '../Actions/actionTypes';

export function CinemaReducer(prevState = initialState.cinemas, action) {
    switch (action.baseType) {
        case CINEMA_ACTIONS.LOAD:
        case CINEMA_ACTIONS.LOAD_BY_ID:
        case CINEMA_ACTIONS.STORE:
        case CINEMA_ACTIONS.DESTROY:
        case CINEMA_ACTIONS.UPDATE:
            return baseReducer(prevState, action);
        default:
            return prevState
    }
}
