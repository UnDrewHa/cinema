import { BEGIN, SUCCESS, FAILURE } from './actionTypes'
import {message} from 'antd';

export function createAsyncAction(dispatch, asyncCall, payload, action, translation) {
    dispatch({
        baseType: action,
        type: action + BEGIN,
        payload
    });
    return asyncCall(payload)
        .then(payload => {
            dispatch({
                baseType: action,
                type: action + SUCCESS,
                payload: payload.data
            });
            translation[action].success && message.success(translation[action].success);
        })
        .catch(payload => {
            dispatch({
                baseType: action,
                type: action + FAILURE,
                payload: payload.data
            });
            translation[action].failure && message.success(translation[action].failure);
        });
}
