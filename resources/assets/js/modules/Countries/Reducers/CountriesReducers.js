import { initialState } from '../../../base/initialState';
import {COUNTRIES_ACTIONS} from '../Actions/actionTypes';
import {baseReducer} from '../../../base/reducerHelpers';

export function CountriesReducers (prevState = initialState.countries, action) {
    switch (action.baseType) {
        case COUNTRIES_ACTIONS.STORE:
        case COUNTRIES_ACTIONS.UPDATE:
        case COUNTRIES_ACTIONS.LOAD:
        case COUNTRIES_ACTIONS.DESTROY:
        case COUNTRIES_ACTIONS.BATCH_DELETE:
            return baseReducer(prevState, action);
        
        default:
            return prevState
    }
}
