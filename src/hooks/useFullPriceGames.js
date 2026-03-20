import { useState, useEffect } from 'react';
import { getFullPriceGames } from '../api/gamesApi.js';

export const useFullPriceGames = () => {
   const [games, setGames] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getFullPriceGames()
         .then(data => setGames(data))
         .catch(console.error)
         .finally(() => setLoading(false));
   }, []);

   return { games, loading };
};