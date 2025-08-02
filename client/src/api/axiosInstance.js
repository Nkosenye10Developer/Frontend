
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://2801b7912736.ngrok-free.app/api/v1/', // replace with your actual base URL
  withCredentials: true, // allows cookies if you're using cookie-based auth
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  mode: 'cors', // enables CORS for cross-origin requests
});

export default axiosInstance;
