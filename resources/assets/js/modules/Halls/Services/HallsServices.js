import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class HallsServices {
    load = () =>
        axios.get('/api/hall');
    
    loadById = (id) =>
        axios.get(`/api/hall/${id}`);
    
    loadCinemas = () =>
        axios.get('/api/cinema');
    
    loadFilmFormat = () =>
        axios.get('/api/film-format');
    
    store = (data) =>
        axios.post('/api/hall', data);
    
    update = (data) =>
        axios.post(`/api/hall/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/hall/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/hall', {...data, _method: 'DELETE'});
}