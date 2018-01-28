import axios from 'axios';

const token = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.post['X-CSRF-TOKEN'] = token.content;

export class AuthServices {
    login = (data) =>
        axios.post('/api/login', data);
    
    register = (data) =>
        axios.post('/api/register', data);
}