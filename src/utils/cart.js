import axios from "axios";
import { API } from '../api/config.js'

export const getCart = async (token) => {
   if (!token) {
      return JSON.parse(localStorage.getItem('cart')) || [];
   }

   try {
      const res = await axios.get(`${API}/cart`, {
         headers: { Authorization: `Bearer ${token}`} 
      });

      console.log('CART RESPONSE:', res.data);

      return res.data.items || []; 
   }
   catch(err) {
      console.log('Error fetching cart:', err);
      return [];
   }
};

export const addToCart = async (game, token) => {
   if(!token) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (!cart.find(item => item.id === game.id)) {
         cart.push(game);
         localStorage.setItem('cart', JSON.stringify(cart));
      }
      return;
   }

   try {
      await axios.post(`${API}/cart/add/${game.id}`, {}, {
         headers: { Authorization: `Bearer ${token}`}
      });
   }
   catch (err) {
    console.error('Error adding to cart:', err);
  }
};

export const removeFromCart = async (gameId, token) => {
   if(!token) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const newCart = cart.filter(item => item.id !== gameId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
   }

   try {
      await axios.delete(`${API}/cart/remove/${gameId}`, {
      headers: { Authorization: `Bearer ${token}` }
      });
      return true;
  } 
   catch (err) {
      console.error('Error removing from cart:', err);
      return false;
  }
};

// Переместить игру в wishlist и удалить из корзины
export const moveToWishlist = async (game, token) => {
  if (!token) {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      if (!wishlist.find(item => item.id === game.id)) wishlist.push(game);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      // удалить из корзины
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const newCart = cart.filter(item => item.id !== game.id);
      localStorage.setItem('cart', JSON.stringify(newCart));

      return newCart;
  }

  try {
      await axios.post(`${API}/wishlist`, { gameId: game.id }, {
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });

      // удалить из корзины
      await axios.delete(`${API}/cart/remove/${game.id}`, {
         headers: { Authorization: `Bearer ${token}` }
      });

      return true;
  } 
   catch (err) {
      console.error('Error moving to wishlist:', err);
      return false;
  }
};