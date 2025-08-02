import axiosInstance from './axiosInstance';




export const getVehiclesById = async (id) => {
    const res = await axiosInstance.get(`/User/${id}`);
    return res.data;
  };
  
  export const getAllVehicles = async (id) => {
    const res = await axiosInstance.get(`customer/Vehicles/${id}`);
    return res.data;
  };

  export const createVehicle = async (vehicleData) => {
    const res = await axiosInstance.post('customer/Vehicle', vehicleData);
    return res.data;
  };


  export const updateVehicles = async (id, vehicleData) => {
    const res = await axios.put(`/User/${id}`, vehicleData);
    return res.data;
  };

  export const deleteVehicles = async (id) => {
    const res = await axios.delete(`/User/${id}`);
    return res.data;
  };
  