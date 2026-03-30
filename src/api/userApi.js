import axios from "axios"
import { API } from './config.js'

const getToken = () => localStorage.getItem('token');

const getAuthHeaders = () => {
  const token = getToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
} ;

export const getUser = async () => {
  return await axios.get(`${API}/users/me`, getAuthHeaders());
};

export const updateUser = async (data) => {
  return await axios.put(`${API}/users/update`, data, getAuthHeaders());
};

export const updateProfilePicture = async (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return await axios.put(
    `${API}/users/profile-picture`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data"
      }
    }
  )
};

export const changePassword = async (data) => {
  return await axios.put(
    `${API}/users/change-password`,
    data,
    getAuthHeaders()
  )
};