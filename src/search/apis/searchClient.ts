import axios from 'axios';

export const searchClient = axios.create({
  baseURL: import.meta.env.VITE_API_SEARCH_URL,
});
