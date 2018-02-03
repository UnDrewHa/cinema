import { initialState } from '../../../base/initialState';
import { createAsyncReducer } from '../../../base/createAsyncReducer';
import { BEGIN, SUCCESS, FAILURE } from '../../../base/actionTypes'

export function CinemaReducer(prevState = initialState.cinemas, action) {
    switch (action.type) {
        case action.baseType + BEGIN:
            return {
                ...prevState,
                status: 1
            };
        case action.baseType + SUCCESS:
            return {
                data: action.payload,
                status: 2
            };
        case action.baseType + FAILURE:
            return {
                ...prevState,
                status: 3
            };
        
        default:
            return prevState
    }
}
