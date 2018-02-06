import { initialState } from '../../../base/initialState';
import { listReducer, detailsReducer } from '../../../base/reducerHelpers';
import {FILMS_ACTIONS} from '../Actions/actionTypes';

export function FilmsReducers(prevState = initialState.films, action) {
    switch (action.baseType) {
        case FILMS_ACTIONS.LOAD_BY_ID:
        case FILMS_ACTIONS.UPDATE:
            return detailsReducer(prevState, action);
        case FILMS_ACTIONS.STORE:
        case FILMS_ACTIONS.LOAD:
        case FILMS_ACTIONS.DESTROY:
        case FILMS_ACTIONS.BATCH_DELETE:
            return listReducer(prevState, action);
        
        default:
            return prevState
    }
}
