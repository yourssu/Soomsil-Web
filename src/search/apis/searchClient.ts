import axios from 'axios';

export const searchClient = axios.create({
  baseURL: 'http://52.78.169.59:8084',
});
