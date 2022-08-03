import axios from 'axios';
import { environments } from 'constants/environments';

const token = localStorage.getItem('ourtube_token');

export const api = axios.create({
  baseURL: environments.API_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`
  }
});