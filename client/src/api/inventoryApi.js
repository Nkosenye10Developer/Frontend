import axiosInstance from './axiosInstance';




export const getInventoryById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  export const getAllInventory = async () => {
    const res = await axiosInstance.get('/User');
    return res.data;
  };

  export const createInventory = async (inventoryData) => {
    const res = await axiosInstance.post('/User', inventoryData);
    return res.data;
  };


  export const updateInventory = async (id, inventoryData) => {
    const res = await axios.put(`/User/${id}`, inventoryData);
    return res.data;
  };

  export const deleteInventory = async (id) => {
    const res = await axios.delete(`/User/${id}`);
    return res.data;
  };
  