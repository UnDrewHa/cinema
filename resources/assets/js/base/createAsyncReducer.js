import { BEGIN, FAILURE, SUCCESS } from './actionTypes';

export function createAsyncReducer(prevState, action) {
    switch (action.type) {
        case action.baseType + BEGIN:
            return {
                ...prevState,
                status: 1
            };
        case action.baseType + SUCCESS:
            return {
                status: 2,
                data: action.payload
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