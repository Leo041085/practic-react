import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app',
});