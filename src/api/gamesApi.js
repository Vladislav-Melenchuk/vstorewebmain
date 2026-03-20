import { API } from './config.js'

export const getAllGames = async () => {
   const response = await fetch(`${API}/games/all`);

   if (!response.ok) {
      throw new Error('Failed to fetch games');
   }

   return response.json();
}

// Функция для получения бесплатных игр
export const getFreeGames = async () => {
   const games = await getAllGames();
   // фильтруем по скидке 100%
   return games.filter(game => game.discountPercent === 100);
};

export const getSaleGames = async () => {
   const games = await getAllGames();
   // фильтруем по скидке 100%
   return games.filter(game => game.discountPercent != null);
};

export const getFullPriceGames = async () => {
   const games = await getAllGames();
   // фильтруем по скидке 100%
   return games.filter(game => game.discountPercent == null);
};

