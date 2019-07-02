import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos'
});

export default axiosInstance;