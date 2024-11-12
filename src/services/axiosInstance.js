import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5240/api', // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

const getToken = () => {
  const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
  return token ? token.split('=')[1] : null;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      // Add Authorization header with Bearer token
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;