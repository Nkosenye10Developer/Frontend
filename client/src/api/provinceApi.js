import axiosInstance from './axiosInstance';




  
  export const getAllProvince = async () => {
    const res = await axiosInstance.get('/common/Provinces');
    return res.data;
  };

 


  