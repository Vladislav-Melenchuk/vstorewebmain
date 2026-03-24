import styles from './Cart.module.css'
import img from '../../assets/img/game-cards/gta.png'
import Button from '../../components/ui/buttons/button/Button.jsx'
import { useContext, useEffect, useState } from 'react'
import { useMemo } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { getCart, removeFromCart, moveToWishlist } from '../../utils/cart.js'

const Cart = () => {
   const { token } = useContext(AuthContext);
   const [cartItems, setCartItems] = useState([]);

   const total = useMemo(() => {
      return cartItems.reduce((acc, item) => acc + (item.finalPrice || item.price), 0);
   }, [cartItems]);

   useEffect(() => {
      const loadCart = async () => {
         const items = await getCart(token);
         setCartItems(items);
      };

      loadCart();

      window.addEventListener('cartUpdated', loadCart);
      return () => window.removeEventListener('cartUpdated', loadCart);
   }, [token]);

   const handleRemove = async (gameId) => {
      const newCart = await removeFromCart(gameId, token);
      if (!token) setCartItems(newCart);
      else setCartItems(await getCart(token));
   };

   const handleMoveToWishlist = async (game) => {
      await moveToWishlist(game, token);
      setCartItems(await getCart(token));
   };

   return (
      <div className={styles.container}>
         <div className={styles.titleBox}>
            <h2 className={styles.title}>Your item in the cart:</h2>
            {/* <div className={styles.totalPrice}>
               <span>UAH {total.toFixed(2)}</span>
            </div> */}
         </div>

         <div className={styles.rowBox}>
         {cartItems.length === 0 ? (
            <p className={styles.empty}>Cart is empty</p>)
            : (<ul>
                  {cartItems.map(game => (
                     <li key={game.cartItemId} className={styles.gameBox}>
                        <img src={game.coverImageUrl || img} alt={game.title || 'game'} className={styles.gameImg} />

                        <div className={styles.gameDescription}>
                           <p className={styles.genre}>{game.publisher || 'BASE GAME'}</p>
                           <p className={styles.name}>{game.title}</p>

                           <div className={styles.rowBox}>
                              <span>All Reviews:</span>
                              <span>Mostly Positive</span>
                           </div>

                              <div className={styles.rowBox}>
                              <span>Release Date</span>
                              <span>{game.releaseDate || 'Unknown'}</span>
                           </div>
                        </div>

                        <div className={styles.settings}>
                           <p className={styles.price}>UAH {game.finalPrice || game.price}</p>
                           <div className={styles.bttnBox}>
                              <Button title='Remove' variant='secondary' size='medium' 
                                    onClick={() => handleRemove(game.gameId)} />

                              <Button title='Move to wishlist' variant='secondary' size='medium' 
                                    onClick={() => handleMoveToWishlist(game)} />
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            )}

            <div className={styles.sidebarTotalPrice}>
               <p className={`${styles.rowBox} ${styles.priceHighlight}`}>Total: 
                  <span className={styles.amount}>UAH {total.toFixed(2)}</span>
               </p>
               <p className={`${styles.rowBox} ${styles.amountHighlight}`}>Tax: <span className={styles.amount}>0%</span></p>
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