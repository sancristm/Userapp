import axios from 'axios';

// Set base URL for the API
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attaching the token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (userData) => API.post('/users', userData);

export const loginUser = (credentials) => API.post('/users/auth', credentials);

export const getUserProfile = () => API.get('/users/profile');

export const updateUserProfile = (updatedData) =>
  API.put('/users/profile', updatedData);

export const logoutUser = () => API.post('/users/logout');
