import axios from "axios";
import { API } from '../api/config.js'

export const getWishlist = async (token) => {
  if(!token) {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  }

  try {
    const res = await axios.get(`${API}/wishlist`, {
      headers: {Authorization: `Bearer ${token}`}
    });
    console.log('WISHLIST RESPONSE:', res.data);
    return res.data || [];
  }
  catch(err) {
    console.log('Error fetching wishlist:', err);
    return [];
  }
};

export const addToWishlist = async (game, token) => {
  if(!token) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if(!wishlist.find(item => item.id === game.id)) {
      wishlist.push(game);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    return;
  }

  try {
    await axios.post(`${API}/wishlist/${game.id}`, {}, {
      headers: { Authorization: `Bearer ${token}`}
    });
  }
  catch (err) {
    console.error('Error adding to wishlist:', err);
  }
};

export const removeFromWishlist = async (gameId, token) => {
  if(!token) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const newWishlist = wishlist.filter(item => item.gameId !== gameId);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    return newWishlist;
  }

  try {
    await axios.delete(`${API}/wishlist/${gameId}`, {
      headers: { Authorization: `Bearer ${token}`}
    });
    return true;
  }
  catch (err) {
    console.error('Error removing from wishlist:', err);
    return false;
  }
};

export const isInWishlist = async (gameId, token) => {
  if (!token) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.some(item => item.id === gameId);
  }

  try {
    const res = await axios.get(`${API}/wishlist/contains/${gameId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return res.data;
  }
  catch (err) {
    console.error('Error checking wishlist:', err);
    return false;
  }
};