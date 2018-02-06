import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class LicensesServices {
    load = () =>
        axios.get('/api/film-license');
    
    loadById = (id) =>
        axios.get(`/api/film-license/${id}`);
    
    loadFilms = () =>
        axios.get(`/api/film`);
    
    loadCinemas = () =>
        axios.get(`/api/cinema`);
    
    loadFilmFormats = () =>
        axios.get(`/api/film-format`);
    
    store = (data) =>
        axios.post('/api/film-license', data);
    
    update = (data) =>
        axios.post(`/api/film-license/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/film-license/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/film-license', {...data, _method: 'DELETE'});
}