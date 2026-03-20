import axios from "axios";
import { API } from "./config.js";

export const getCart = () => {

   const token = localStorage.getItem('token');
   return axios.get(`{API}/cart`, {
      headers: {Authorization: `Bearer ${token}`}
   });
};