import axios from 'axios'
let token = localStorage.getItem('auth');

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Authorization': `Bearer ${token}` }
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error?.response?.status) {
    localStorage.setItem('auth', '')
    window.location.href = "/login";
  }

  if (422 == error?.response?.status) {
    //localStorage.setItem('auth', '')
    //window.location.href = "/login";
    return Promise.reject(error)
  }

  return Promise.reject(error)
});

export default axiosInstance