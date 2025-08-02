import axiosInstance from './axiosInstance';





  export const getAllCity = async () => {
    const res = await axiosInstance.get('/common/Cities');
    return res.data;
  };


 