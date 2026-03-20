import { useEffect, useState } from 'react';
import { getAllGames } from '../api/gamesApi.js';


export const useGames = () => {
   const [games, setGames] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getAllGames()
         .then(data => {setGames(data); console.log(data)})
         .catch(console.error)
         .finally(() => setLoading(false));
   }, []);

   return { games, loading };
};