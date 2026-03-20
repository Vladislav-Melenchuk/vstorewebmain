import { useParams, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Game.module.css'

import img from '../../assets/img/general-img/img01.png'
import {formatedDate} from '../../utils/formatedDate.js'
import Button from '../../components/ui/buttons/button/Button.jsx'

const Game = () => {

   const { id } = useParams();
   const location = useLocation();

   const [game, setGame] = useState(location.state?.game || null);

   // если нет state — грузим с сервера
   useEffect(() => {
      if (!game) {
         fetchGameById(id).then(setGame);
      }
   }, [id]);

   if (!game) return <div>Loading...</div>;

   return(
      <div className={styles.container}>
         <h2 className={styles.title}>{game.title}</h2>
         <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
               <img src={game?.coverImageUrl} className={styles.image} alt={game?.title || 'game image'}/>
               <h4 className={styles.subtitle}>About this game</h4>
               <p className={styles.description}>{game.description}</p>
            </div>

            <div className={styles.sidebar}>

               <div className={styles.sidebarWrapper}>
                  <img src={img} />
                  <p>
                     Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!
                  </p>
                  <div className={styles.rowDescription}>
                     <p>Release Date:</p>
                     <span>{game?.releaseDate ? formatedDate(game.releaseDate) : '—'}</span>
                  </div>

                  <div className={styles.rowDescription}>
                     <p>Publisher:</p>
                     <span>{game?.publisher || 'Unknown'}</span>
                  </div>

                  <div className={styles.rowDescription}>
                     <Button title='Add to cart' variant='primary' size='large' onClick={() => addToCart(game)}/>
                     <Button title='Wishlist' variant={'secondary'} size='large' onClick={() => addToWishlist(game)}/>    
                  </div>
               </div>
            </div>
         </div>
      </div>
   )

}

export default Game;