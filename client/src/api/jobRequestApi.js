import axiosInstance from './axiosInstance';




export const getJobRequestById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  // export const getAllJobRequest = async () => {
  //   const res = await axiosInstance.get('/User');
  //   return res.data;
  // };

  export const getAllJobRequest = async (id) => {
    const res = await axiosInstance.get(`customer/JobRequests/${id}`);
    return res.data;
  };

  
  export const getAllBusinessJobRequest = async (id) => {
    const res = await axiosInstance.get(`business/JobRequests/${id}`);
    return res.data;
  };


  export const createJobRequest = async (jobRequestData) => {
    const res = await axiosInstance.post('customer/JobRequest', jobRequestData);
    return res.data;
  };


  export const updateJobRequest = async (id, jobRequestData) => {
    const res = await axios.put(`/User/${id}`, jobRequestData);
    return res.data;
  };

  export const deleteJobRequest = async (id) => {
    const res = await axios.delete(`/User/${id}`);
    return res.data;
  };
  