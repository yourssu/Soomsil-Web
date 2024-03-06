import axios from 'axios';

export const searchClient = axios.create({
  baseURL: 'https://api.search.yourssu.com/',
});
