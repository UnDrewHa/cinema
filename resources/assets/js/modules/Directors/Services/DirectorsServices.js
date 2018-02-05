import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class DirectorsServices {
    load = () =>
        axios.get('/api/director');
    
    store = (data) =>
        axios.post('/api/director', data);
    
    update = (data) =>
        axios.post(`/api/director/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/director/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/director', {...data, _method: 'DELETE'});
}