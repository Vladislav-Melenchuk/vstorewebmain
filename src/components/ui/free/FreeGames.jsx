import styles from './FreeGames.module.css'
import giftIcon from '../../../assets/icons/general-icons/gift.svg'
import { formatedDate } from '../../../utils/formatedDate.js'
import { useFreeGames } from '../../../hooks/useFreeGames.js'


const FreeGames = () => {
   const { games, loading } = useFreeGames();

   return (
      <div className={styles.container}>
         <div className={styles.titleBox}>
            <div>
               <img src={giftIcon} alt='' />
               <h3 className={styles.title}>Free games!</h3>
            </div>
       
            <button className={styles.button}>View More</button>
         </div>

         <ul className={styles.cardsList}>
            {games.map((card, index) => (
               <li key={index}>
                  <img src={card.coverImageUrl} />
                  <span>{card.developer}</span>
                  <p>{card.title}</p>
                  <span>{formatedDate(card.releaseDate)}</span>
                  <span>FREE</span>                 
               </li>
            ))}
         </ul>
      </div>
   )
}

export default FreeGames;