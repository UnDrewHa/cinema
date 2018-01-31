import { BEGIN, SUCCESS, FAILURE } from './actionTypes'
export function createAsyncAction(dispatch, asyncCall, payload, action) {
    dispatch({
       type: action + BEGIN,
       payload
    });
    return asyncCall(payload)
        .then(payload => {
            dispatch({
                type: action + SUCCESS,
                payload
            });
        })
        .catch(payload => {
            dispatch({
                type: action + FAILURE,
                payload
            });
        });
}
