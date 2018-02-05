import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class ActorsServices {
    load = () =>
        axios.get('/api/actor');
    
    store = (data) =>
        axios.post('/api/actor', data);
    
    update = (data) =>
        axios.post(`/api/actor/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/actor/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/actor', {...data, _method: 'DELETE'});
}