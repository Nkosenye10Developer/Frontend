import axiosInstance from './axiosInstance';




export const getCustomerById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  export const getAllCustomers = async () => {
    const res = await axiosInstance.get('/User');
    return res.data;
  };

  export const createCustomer = async (customerData) => {
    const res = await axiosInstance.post('/User', customerData);
    return res.data;
  };


  export const updateCustomer = async (id, customerData) => {
    const res = await axios.put(`/User/${id}`, customerData);
    return res.data;
  };

  export const deleteCustomer = async (id) => {
    const res = await axios.delete(`/User/${id}`);
    return res.data;
  };
  