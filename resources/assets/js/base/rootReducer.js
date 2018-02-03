import { combineReducers } from 'redux';
import {CinemaReducer} from '../modules/Cinemas/Reducers/CinemaReducers';
import {HallsReducer} from '../modules/Halls/Reducers/HallsReducers';

export const rootReducer = combineReducers({
    cinemas: CinemaReducer,
    halls: HallsReducer
});