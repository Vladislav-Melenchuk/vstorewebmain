import styles from './TopGame.module.css'
import { Link } from 'react-router-dom';
import Button from '../buttons/button/Button.jsx'
import { useGames } from '../../../hooks/useGames'

const TopGame = () => {
   const { games } = useGames();
   const topGame = games?.[0];

   if (!topGame) return null;

   return (
      <div className={styles.container}>
         <img src={topGame?.coverImageUrl} className={styles.image}/>

         <div className={styles.description}>
            <div className={styles.descriptionWrapper}>
               <h3 className={styles.title}>{topGame?.title}</h3>
               <span className={styles.span}>NEW SEASON</span>

               <div className={styles.additionalImages}>
                  {topGame?.images?.[0] && (
                     <img src={topGame.images[0]} alt="Screenshot 1" />
                  )}
                  {topGame?.images?.[1] && (
                     <img src={topGame.images[1]} alt="Screenshot 2" />
                  )}
               </div>

               <div className={styles.buttonWrapper}>
                  <span>TOP</span>
                  <Link to={`/game/${topGame.id}`} state={{ game: topGame }}>
                     <Button title='Learn more' variant='primary' size='medium'/>
                  </Link>
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default TopGame;