import styles from './TopGame.module.css'

import img01 from '../../../assets/img/game-cards/apex-legends04.png'
import img02 from '../../../assets/img/game-cards/apex-legends02.png'
import img03 from '../../../assets/img/game-cards/apex-legends03.png'

import Button from '../buttons/button/Button.jsx';

const TopGame = () => {
   return (
      <div className={styles.container}>
         <img src={img01} className={styles.image}/>

         <div className={styles.description}>
            <div className={styles.descriptionWrapper}>
               <h3 className={styles.title}>APEX LEGENDS</h3>
               <span className={styles.span}>NEW SEASON</span>

               <div className={styles.additionalImages}>
                  <img src={img02} alt="Screenshot 1" />
                  <img src={img03} alt="Screenshot 2" />
               </div>

               <div className={styles.buttonWrapper}>
                  <span>FREE</span>
                  <Button title='Learn more' variant='primary' size='medium'/>
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default TopGame;