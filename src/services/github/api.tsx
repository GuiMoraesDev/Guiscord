import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
