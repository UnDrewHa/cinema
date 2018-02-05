import { BEGIN, FAILURE, SUCCESS } from './actionTypes';

export function baseReducer(prevState, action) {
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
    }
}

export function listReducer(prevState, action) {
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

export function detailsReducer(prevState, action) {
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