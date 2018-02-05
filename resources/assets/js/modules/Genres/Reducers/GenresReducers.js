import { initialState } from '../../../base/initialState';
import {GENRES_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function GenresReducers(prevState = initialState.genres, action) {
    switch (action.baseType) {
        case GENRES_ACTIONS.STORE:
        case GENRES_ACTIONS.UPDATE:
        case GENRES_ACTIONS.LOAD:
        case GENRES_ACTIONS.DESTROY:
        case GENRES_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
