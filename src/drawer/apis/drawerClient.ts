import axios from 'axios';

export const drawerClient = axios.create({
  baseURL: 'https://test.ground.yourssu.com/ground',
});
