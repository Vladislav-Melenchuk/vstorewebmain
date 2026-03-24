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

   const [index, setIndex] = useState(0);

   useEffect(() => {
    if (games.length === 0) return;

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % games.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [games.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % games.length);
  };

   const data = type === 'sale' ? saleGames : type === 'fullPrice' ? fullPriceGame : games;

   // если showAll = false → только 7 карточек
   const visibleCards = showAll ? data : data.slice(0, 7);

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

         {data.length > 7 && (
            <Button
               title={showAll ? 'Hide all games' : 'All games'}
               variant="positioned" size='small'
               onClick={() => setShowAll(prev => !prev)}
            />
         )}

         {/* Кнопка назад */}
         <button className={`${styles.advertisingBtn} ${styles.prev}`} onClick={prevSlide}>‹</button>

         {/* Кнопка вперёд */}
         <button className={`${styles.advertisingBtn} ${styles.next}`} onClick={nextSlide}>›</button>

        {/* Точки */}
         <div className={styles.advertisingDots}>
         {games.map((_, i) => (
            <button
               key={i}
               onClick={() => setIndex(i)}
               className={`${styles.dot} ${i === index ? 'active' : ''}`}
            />
         ))}
         </div>
      </div>
   )
}

export default Advertising;