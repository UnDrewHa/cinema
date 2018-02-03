import { combineReducers } from 'redux';
import {CinemaReducer} from '../modules/Cinemas/Reducers/CinemaReducers';

export const rootReducer = combineReducers({
    cinemas: CinemaReducer
});