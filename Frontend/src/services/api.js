import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL
  withCredentials: true, // For cookies/session management
});

// Intercept requests to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
