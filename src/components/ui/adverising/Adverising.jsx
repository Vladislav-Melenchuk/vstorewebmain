import { useEffect, useState } from 'react'
import styles from './Adverising.module.css'
import Card from "../cards/card/Card"
import Button from '../buttons/button/Button.jsx'

import { useGames } from '../../../hooks/useGames'
import { useSaleGames } from '../../../hooks/useSaleGames'
import { useFullPriceGames } from '../../../hooks/useFullPriceGames'

const Advertising = ({title, type}) => {
   const [showAll, setShowAll] = useState(false);
   const { games } = useGames();
   const { games: saleGames } = useSaleGames();
   const { games: fullPriceGame } = useFullPriceGames();

   const data = type === 'sale' ? saleGames : type === 'fullPrice' ? fullPriceGame : games;

   // если showAll = false → только 8 карточек
   const visibleCards = showAll ? data : data.slice(0, 8);

   return (
      <div className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
         <ul>
            {visibleCards.map((card) => (
               <li key={card.id}>
                  <Card {...card} />
               </li>
            ))}
         </ul>

         {data.length > 8 && (
            <Button
               title={showAll ? 'Hide all games' : 'All games'}
               variant="positioned" size='small'
               onClick={() => setShowAll(prev => !prev)}
            />
         )}
      </div>
   )
}

export default Advertising;