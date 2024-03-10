import axios from 'axios';

export const drawerClient = axios.create({
  baseURL: import.meta.env.VITE_API_DRAWER_URL,
});
