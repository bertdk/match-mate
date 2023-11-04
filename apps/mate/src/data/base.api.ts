import axios from 'axios';
import config from 'src/config';

export const api = axios.create({ baseURL: config.apiUrl });
