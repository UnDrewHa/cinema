import { initialState } from '../../../store/initialState';
import { BEGIN, SUCCESS, FAILURE } from '../../../core/baseActionTypes'
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_RESET } from '../Actions/actionTypes';

export function AuthReducer(prevState = initialState, action) {
    switch (action.type) {
        case AUTH_REGISTER + BEGIN:
            return {
                ...prevState,
                userInfo: {
                    status: 1,
                    data: prevState.userInfo.data
                }
            };
        case AUTH_REGISTER + SUCCESS:
            return {
                ...prevState,
                userInfo: {
                    status: 2,
                    data: action.payload
                }
            };
        case AUTH_REGISTER + FAILURE:
            return {
                ...prevState,
                userInfo: {
                    status: 3,
                    errors: action.payload
                }
            };
            
        default:
            return prevState
    }
}
