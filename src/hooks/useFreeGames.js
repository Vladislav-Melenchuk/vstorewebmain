import { useState, useEffect } from 'react';
import { getFreeGames } from '../api/gamesApi.js';

export const useFreeGames = () => {
   const [games, setGames] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getFreeGames()
         .then(data => setGames(data))
         .catch(console.error)
         .finally(() => setLoading(false));
   }, []);

   return { games, loading };
};