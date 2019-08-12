import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.6:3333'
})
// 192.168.15.6
export default api;