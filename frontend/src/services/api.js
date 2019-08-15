import axios from 'axios';


const api = axios.create({
    baseURL: 'https://leandrorocha.dev/api/timdev'
});

export default api;