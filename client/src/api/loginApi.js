
import axiosInstance from './axiosInstance';

export const login = async (userData) => {
  const res = await axiosInstance.post('/auth/Login', userData);
  return res.data;
};


export const logout = async (userData) => {
  const res = await axiosInstance.post('/auth/Logout', userData);
  return res.data;
};
