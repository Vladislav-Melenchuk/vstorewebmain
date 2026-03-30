import { useMemo } from 'react'
import styles from './Featured.module.css'
import FeaturedCard from '../cards/featured-card/FeaturedCard.jsx'
import { useGames } from '../../../hooks/useGames'

const Featured = () => {
   const { games, loading } = useGames();

   const cardsFeatured = useMemo(() => {
      if (!games.length) return [];
      return [...games]
         .sort(() => 0.5 - Math.random())
         .slice(0, 3);
   }, [games]);

   if (loading) return <div>Loading...</div>;

   return (
      <div className={styles.container}>
        <ul>
         {cardsFeatured.map((card) => (
            <li key={card.id}>
               <FeaturedCard
                  game={card}
                  src={card.coverImageUrl}
                  title={card.title}
                  alt={card.title}
                  info={card.description}
               />
            </li>
            ))}
         </ul>
      </div>
   )
}

export default Featured;