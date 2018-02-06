import { combineReducers } from 'redux';
import {CinemaReducer} from '../modules/Cinemas/Reducers/CinemaReducers';
import {HallsReducer} from '../modules/Halls/Reducers/HallsReducers';
import { ActorsReducer } from '../modules/Actors/Reducers/ActorsReducers';
import { DirectorsReducer } from '../modules/Directors/Reducers/DirectorsReducers';
import { GenresReducers } from '../modules/Genres/Reducers/GenresReducers';
import { CountriesReducers } from '../modules/Countries/Reducers/CountriesReducers';
import { FilmFormatsReducers } from '../modules/FilmFormats/Reducers/FilmFormatsReducers';
import { AgeLimitsReducers } from '../modules/AgeLimits/Reducers/AgeLimitsReducers';
import { FilmsReducers } from '../modules/Films/Reducers/FilmsReducers';

export const rootReducer = combineReducers({
    actors: ActorsReducer,
    cinemas: CinemaReducer,
    countries: CountriesReducers,
    filmFormats: FilmFormatsReducers,
    ageLimits: AgeLimitsReducers,
    directors: DirectorsReducer,
    genres: GenresReducers,
    halls: HallsReducer,
    films: FilmsReducers,
});