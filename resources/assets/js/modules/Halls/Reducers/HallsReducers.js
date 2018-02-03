import { initialState } from '../../../base/initialState';
import { createAsyncReducer } from '../../../base/createAsyncReducer';
import { BEGIN, SUCCESS, FAILURE } from '../../../base/actionTypes';
import {HALLS_ACTIONS} from '../Actions/actionTypes';

function detailsReducer(prevState, action) {
    switch (action.type) {
        case action.baseType + BEGIN:
            return {
                ...prevState,
                details: {
                    ...prevState.details,
                    status: 1
                }
            };
        case action.baseType + SUCCESS:
            return {
                ...prevState,
                details: {
                    data: action.payload,
                    status: 2
                }
            };
        case action.baseType + FAILURE:
            return {
                ...prevState,
                details: {
                    ...prevState.details,
                    status: 3
                }
            };
    }
}

function listReducer(prevState, action) {
    switch (action.type) {
        case action.baseType + BEGIN:
            return {
                ...prevState,
                list: {
                    ...prevState.list,
                    status: 1
                }
            };
        case action.baseType + SUCCESS:
            return {
                ...prevState,
                list: {
                    data: action.payload,
                    status: 2
                }
            };
        case action.baseType + FAILURE:
            return {
                ...prevState,
                list: {
                    ...prevState.list,
                    status: 3
                }
            };
    }
}

export function HallsReducer(prevState = initialState.halls, action) {
    switch (action.baseType) {
        case HALLS_ACTIONS.LOAD_BY_ID:
        case HALLS_ACTIONS.UPDATE:
            return detailsReducer(prevState, action);
        case HALLS_ACTIONS.LOAD:
        case HALLS_ACTIONS.DESTROY:
        case HALLS_ACTIONS.BATCH_DELETE:
            return listReducer(prevState, action);
        
        default:
            return prevState
    }
}
