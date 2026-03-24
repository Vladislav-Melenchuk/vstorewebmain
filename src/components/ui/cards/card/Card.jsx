import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { useState, useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext.jsx' 
import { addToCart } from '../../../../utils/cart.js'
import { addToWishlist } from '../../../../utils/wishlist.js'
import { useToast } from '../../toast/Toast.jsx'

const Card = ({id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher }) => {

   const game = { id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher };
   const { token } = useContext(AuthContext);
   const { showToast } = useToast();
   const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    await addToCart(game, token);
    showToast('Added to cart 🛒', 'success');
    console.log('Added to cart');
  };

   const handleAddToWishlist = async (e) => {
    e.preventDefault();
    await addToWishlist(game, token);
    setIsLiked(prev => !prev);
    showToast(isLiked ? 'Removed from wishlist 💔' : 'Added to wishlist ❤️','info');
    console.log('Added to wishlist');
  };

   return (
      <Link to={`/game/${id}`} state={{ game }} className={styles.container}>
        <div className={styles.imageWrapper}>
            <img className={styles.image}
               src={coverImageUrl}
               alt={title}
            />

            <div className={styles.actions}>
               <FaShoppingCart  onClick={handleAddToCart} className={styles.cartImg} />
               <FaHeart onClick={handleAddToWishlist}
               className={`${styles.wishlistImg} ${isLiked ? styles.active : ''}`} />
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