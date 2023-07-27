import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app',
});

export const requestUsers = async (skip, limit) => {
  const { data } = await instance.get(`/users?skip=${skip}&limit=${limit}`);
  return data.users;
};

export const getAllUsers = async (page, limit) => {
  const { data } = await instance.get(`/users?page=${page}&limit=${limit}`);
  return data;
};

export const requestUser = async id => {
  const { data } = await instance.get(`/users/${id}`);
  console.log(data);
  return data;
};

export const searchUsers = async query => {
  const { data } = await instance.get(`/users/search?q=${query}`);
  return data;
};

