import axios from 'axios';

// En local usará localhost. En producción leerá la variable VITE_API_URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL
});

export default api;