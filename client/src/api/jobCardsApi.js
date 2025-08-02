import axiosInstance from './axiosInstance';




export const getjobCardsById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  export const getAlljobCards = async () => {
    const res = await axiosInstance.get('/User');
    return res.data;
  };

  export const createJobCards = async (jobCardsData) => {
    const res = await axiosInstance.post('/User', jobCardsData);
    return res.data;
  };


  export const updateJobCards = async (id, jobCardsData) => {
    const res = await axios.put(`/User/${id}`, jobCardsData);
    return res.data;
  };