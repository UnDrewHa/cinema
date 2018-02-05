import { combineReducers } from 'redux';
import {CinemaReducer} from '../modules/Cinemas/Reducers/CinemaReducers';
import {HallsReducer} from '../modules/Halls/Reducers/HallsReducers';
import { ActorsReducer } from '../modules/Actors/Reducers/ActorsReducers';
import { DirectorsReducer } from '../modules/Directors/Reducers/DirectorsReducers';
import { GenresReducers } from '../modules/Genres/Reducers/GenresReducers';

export const rootReducer = combineReducers({
    actors: ActorsReducer,
    cinemas: CinemaReducer,
    directors: DirectorsReducer,
    genres: GenresReducers,
    halls: HallsReducer
});