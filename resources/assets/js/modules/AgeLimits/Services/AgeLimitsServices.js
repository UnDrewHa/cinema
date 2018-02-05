import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class AgeLimitsServices {
    load = () =>
        axios.get('/api/age-limit');
    
    store = (data) =>
        axios.post('/api/age-limit', data);
    
    update = (data) =>
        axios.post(`/api/age-limit/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/age-limit/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/age-limit', {...data, _method: 'DELETE'});
}