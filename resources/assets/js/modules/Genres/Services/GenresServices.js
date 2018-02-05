import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class GenresServices {
    load = () =>
        axios.get('/api/genre');
    
    store = (data) =>
        axios.post('/api/genre', data);
    
    update = (data) =>
        axios.post(`/api/genre/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/genre/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/genre', {...data, _method: 'DELETE'});
}