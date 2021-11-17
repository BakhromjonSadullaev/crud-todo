import axios from 'axios';

const api = axios.create({ baseURL: 'https://todolistbeexpress.herokuapp.com' });

export { api };

export * from './to-do.service'