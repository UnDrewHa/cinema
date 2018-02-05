import axios from 'axios';
import {message} from 'antd';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class CountriesServices {
    load = () =>
        axios.get('/api/country');
    
    store = (data) =>
        axios.post('/api/country', data);
    
    update = (data) =>
        axios.post(`/api/country/${data.id}`, {...data, _method: 'PUT'});
    
    destroy = (id) =>
        axios.post(`/api/country/${id}`, {_method: 'DELETE'});
    
    batchDelete = (data) =>
        axios.post('/api/country', {...data, _method: 'DELETE'});
}