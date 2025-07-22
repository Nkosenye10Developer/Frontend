import axios from './axiosInstance';

export const getUser = async (id) => {
  const res = await axios.get(`/User/${id}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get('/User');
  return res.data;
};

export const createUser = async (userData) => {
  const res = await axios.post('/User', userData);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`/User/${id}`, userData);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`/User/${id}`);
  return res.data;
};
