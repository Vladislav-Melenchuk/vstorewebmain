import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const Card = ({id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher }) => {

   const game = { id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher };

   const addToCart = (e) => {
      e.preventDefault(); // чтобы не переходило по Link
      
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (!cart.find(item => item.id === game.id)) {
         cart.push(game);
      }
      cart.push(game);
      localStorage.setItem('cart', JSON.stringify(cart));
   };

   const addToWishlist = (e) => {
      e.preventDefault();

      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlist.push(game);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
   };

   return (
      <Link to={`/game/${id}`} state={{ game }} className={styles.container}>
        <div className={styles.imageWrapper}>
            <img className={styles.image}
               src={coverImageUrl}
               alt={title}
            />

            <div className={styles.actions}>
               {/* <FaShoppingCart  onClick={addToCart} className={styles.cartImg} /> */}
               <FaHeart onClick={addToWishlist} className={styles.wishlistImg} />
            </div>
         </div>
   
         <div className={styles.info}>
            <div className={styles.descriptionBox}>
               <p className={styles.category}>{developer}</p>
               <h3 className={styles.title}>{title}</h3>
            </div>

            <div className={styles.priceContainer}>
               
               {discountPercent && (
                  <span className={styles.discount}>
                     -{discountPercent}%
                  </span>
               )}

               <div className={styles.beforeAfterPrice}>
                  {discountPercent ? (
                     <>
                        <span className={styles.priceBefore}>
                           UAH {price}
                        </span>
                        <span className={styles.price}>
                           UAH {finalPrice}
                        </span>
                     </>
                  ) : (
                     <span className={styles.price}>
                        UAH {price}
                     </span>
                  )}
               </div>
            </div>

        

         </div>    
      </Link>
   )
}

export default Card;