import axios from 'axios';

export const soomsilClient = axios.create({
  baseURL: import.meta.env.VITE_API_DRAWER_URL,
});

export const searchClient = axios.create({
  baseURL: import.meta.env.VITE_API_SEARCH_URL,
});

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_HOME_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});
