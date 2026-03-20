import styles from './Cart.module.css'

import img from '../../assets/img/game-cards/gta.png'
import Button from '../../components/ui/buttons/button/Button.jsx'

const Cart = () => {
   return (
   <div className={styles.container}>
      <div className={styles.titleBox}>
         <h2 className={styles.title}>Your item in the cart:</h2>
         <div className={styles.totalPrice}>
            <span>UAH 0.00</span>
         </div>
      </div>

      <div className={styles.rowBox}>
          <ul>
         <li className={styles.gameBox}>
            <img src={img} alt='text' className={styles.gameImg} />

            <div className={styles.gameDescription}>
               <p className={styles.genre}>BASE GAME</p>
               <p className={styles.name}>The End of the Sun</p>

               <div className={styles.rowBox}>
                  <span>All Reviews:</span>
                  <span>Mostly Positive</span>
               </div>

                  <div className={styles.rowBox}>
                  <span>Release Date</span>
                  <span>20.05.2025</span>
               </div>
            </div>

            <div className={styles.settings}>
               <p className={styles.price}>UAH 0.00</p>
               <div className={styles.bttnBox}>
                  <Button title='Remove' variant='secondary' size='medium' />
                  <Button title='Move to wishlist' variant='secondary' size='medium' />
               </div>
            </div>
         </li>

         <li className={styles.gameBox}>
            <img src={img} alt='text' className={styles.gameImg} />

            <div className={styles.gameDescription}>
               <p className={styles.genre}>BASE GAME</p>
               <p className={styles.name}>The End of the Sun</p>

               <div className={styles.rowBox}>
                  <span>All Reviews:</span>
                  <span>Mostly Positive</span>
               </div>

                  <div className={styles.rowBox}>
                  <span>Release Date</span>
                  <span>20.05.2025</span>
               </div>
            </div>

            <div className={styles.settings}>
               <p className={styles.price}>UAH 0.00</p>
               <div className={styles.bttnBox}>
                  <Button title='Remove' variant='secondary' size='medium' />
                  <Button title='Move to wishlist' variant='secondary' size='medium' />
               </div>
            </div>
         </li>
      </ul>

      <div className={styles.sidebarTotalPrice}>
         <p className={`${styles.rowBox} ${styles.priceHighlight}`}>Total: <span className={styles.amount}>UAH 0.00</span></p>
         <p className={`${styles.rowBox} ${styles.amountHighlight}`}>Tax: <span className={styles.amount}>4%</span></p>
         <p className={styles.disclaimer}>
            Of their respective owners in the US and other countries. VAT included in all prices where applicable
         </p>
         <Button title='Check Out' variant='primary' size='xlarge' className={styles.checkoutButton}/>
      </div>


      </div>

   </div>
   )
}

export default Cart;