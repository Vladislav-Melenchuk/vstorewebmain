import axios from "axios";
import { API } from '../api/config.js'

export const getMyLibrary = async (token) => {
  if (!token) return [];

  try {
    const res = await axios.get(`${API}/library/my`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data || [];
  } 
  catch (err) {
    console.log('Error fetching library:', err);
    return [];
  }
};