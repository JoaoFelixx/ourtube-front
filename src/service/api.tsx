import axios from 'axios';
import { environments } from 'constants/environments';

export const api = axios.create({
  baseURL: environments.API_URL,
  timeout: 5000,
});