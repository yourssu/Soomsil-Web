import axios from 'axios';

export const homeClient = axios.create({
  baseURL: import.meta.env.VITE_API_DRAWER_URL,
});
