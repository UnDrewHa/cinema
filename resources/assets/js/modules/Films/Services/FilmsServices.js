import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class FilmsServices {
    load = () =>
        axios.get('/api/film');
    
    loadById = (id) =>
        axios.get(`/api/film/${id}`);
    
    loadDirectors = () =>
        axios.get(`/api/director`);
    
    loadActors = () =>
        axios.get(`/api/actor`);
    
    loadGenres = () =>
        axios.get(`/api/genre`);
    
    loadAgeLimits = () =>
        axios.get(`/api/age-limit`);
    
    loadCountries = () =>
        axios.get(`/api/country`);
    
    store = (data) =>
        axios.post('/api/film', data);
    
    update = (data) =>
        axios.post(`/api/film/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/film/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/film', {...data, _method: 'DELETE'});
}