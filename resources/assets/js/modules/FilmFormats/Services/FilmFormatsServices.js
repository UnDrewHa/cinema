import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class FilmFormatsServices {
    load = () =>
        axios.get('/api/film-format');
    
    store = (data) =>
        axios.post('/api/film-format', data);
    
    update = (data) =>
        axios.post(`/api/film-format/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/film-format/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/film-format', {...data, _method: 'DELETE'});
}