import axios from 'axios';

const token = localStorage.getItem('ourtube_token');

export const api = axios.create({
	baseURL: 'http://localhost:4545/api/v1',
  timeout: 3000,
   headers: {
    Authorization: `Bearer ${token}`  
  }  
});