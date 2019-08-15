import axios from 'axios';

const api = axios.create({
    baseURL: 'https://leandrorocha.dev/api/timdev'
})
// 192.168.15.6
export default api;