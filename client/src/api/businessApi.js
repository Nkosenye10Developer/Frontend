import axiosInstance from './axiosInstance';




export const getBusinessById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  

  export const getAllBusiness = async (cityId, provinceId) => {
    const response = await axiosInstance.get(`common/businesses?cityId=${cityId}&provinceId=${provinceId}`);
    return response.data;
  };
  export const createBusiness = async (businessData) => {
    const res = await axiosInstance.post('/User', businessData);
    return res.data;
  };


  export const updateBusiness = async (id, businessData) => {
    const res = await axios.put(`/User/${id}`, businessData);
    return res.data;
  };

  export const deleteBusiness = async (id) => {
    const res = await axios.delete(`/User/${id}`);
    return res.data;
  };
  