import { API } from '../api/config.js'

export const createOrder = async (token) => {
   const res = await fetch(`${API}/orders/create`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      }
   });

   if (!res.ok) {
      throw new Error('Failed to create order');
   }

   return await res.json();
};