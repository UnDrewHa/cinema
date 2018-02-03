import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class CinemaServices {
    load = () =>
        axios.get('/api/cinema');
    
    loadById = (id) =>
        axios.get(`/api/cinema/${id}`);
    
    store = (data) =>
        axios.post('/api/cinema', data);
    
    update = (data) =>
        axios.post(`/api/cinema/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/cinema/${id}`, {_method: 'DELETE'});
}