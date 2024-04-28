import axios from 'axios';

export const soomsilClient = axios.create({
  baseURL: import.meta.env.VITE_API_SOOMSIL_URL,
});

export const searchClient = axios.create({
  baseURL: import.meta.env.VITE_API_SEARCH_URL,
});

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL,
  headers: {
    withCredentials: true,
  },
});
