import { useState, useEffect } from 'react';
import { getSaleGames } from '../api/gamesApi.js';

export const useSaleGames = () => {
   const [games, setGames] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getSaleGames()
         .then(data => {console.log('sales', data); setGames(data)})
         .catch(console.error)
         .finally(() => setLoading(false));
   }, []);

   return { games, loading };
};