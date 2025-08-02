import axiosInstance from './axiosInstance';

export const getAllServices = async () => {
  const response = await axiosInstance.get('/common/ServiceTypes');
  return response.data;
};
