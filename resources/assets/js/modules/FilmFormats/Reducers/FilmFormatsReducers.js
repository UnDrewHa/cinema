import { initialState } from '../../../base/initialState';
import {FILM_FORMATS_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function FilmFormatsReducers(prevState = initialState.filmFormats, action) {
    switch (action.baseType) {
        case FILM_FORMATS_ACTIONS.STORE:
        case FILM_FORMATS_ACTIONS.UPDATE:
        case FILM_FORMATS_ACTIONS.LOAD:
        case FILM_FORMATS_ACTIONS.DESTROY:
        case FILM_FORMATS_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
