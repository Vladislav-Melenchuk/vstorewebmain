import styles from './Wishlist.module.css'

import img from '../../assets/img/game-cards/gta.png'
import Button from '../../components/ui/buttons/button/Button.jsx'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { getWishlist, removeFromWishlist } from '../../utils/wishlist.js'

const Wishlist = () => {
  const { token } = useContext(AuthContext)
  const [wishlistItems, setWishlistItems] = useState([])

  useEffect(() => {
    const loadWishlist = async () => {
      const items = await getWishlist(token)
      setWishlistItems(items)
    }

    loadWishlist()

    window.addEventListener('wishlistUpdated', loadWishlist)
    return () => window.removeEventListener('wishlistUpdated', loadWishlist)
  }, [token])

  const handleRemove = async (gameId) => {
    const newWishlist = await removeFromWishlist(gameId, token)

    if (!token) {
      setWishlistItems(newWishlist)
    } else {
      setWishlistItems(await getWishlist(token))
    }
  }

  const calcFinalPrice = (game) => {
    if (!game.discountPercent || game.discountPercent === 0) {
      return game.price
    }

    return game.price - (game.price * game.discountPercent) / 100
  }

  return (
    <div className={styles.container}>

      <div className={styles.titleBox}>
        <h2 className={styles.title}>Your favorite games:</h2>

        <div className={styles.totalCount}>
          <span>{wishlistItems.length}</span>
        </div>
      </div>

      <div className={styles.rowBoxList}>
        {wishlistItems.length === 0 ? (
          <p>Wishlist is empty!</p>
        ) : (
          <ul className={styles.gameList}>
            {wishlistItems.map((game) => {
              const finalPrice = calcFinalPrice(game)

              return (
                <li key={game.gameId} className={styles.gameBox}>

                  <img
                    src={game.coverImageUrl || img}
                    alt={game.title}
                    className={styles.gameImg}
                  />

                  <div className={styles.gameDescription}>
                    <p className={styles.genre}>BASE GAME</p>

                    <p className={styles.name}>{game.title}</p>

                    <div className={styles.rowBox}>
                      <span>Added:</span>
                      <span>
                        {game.addedAt
                          ? new Date(game.addedAt).toLocaleDateString()
                          : 'Unknown'}
                      </span>
                    </div>

                    <div className={styles.rowBox}>
                      <span>Discount:</span>
                      <span>
                        {game.discountPercent ?? 0}%
                      </span>
                    </div>

                  </div>

                  <div className={styles.settings}>
                    <Button
                      title='Remove'
                      variant='secondary'
                      size='medium'
                      className={styles.bttnBox}
                      onClick={() => handleRemove(game.gameId)}
                    />
            
                   <div className={styles.price}>
                    {game.discountPercent && game.discountPercent > 0 ? (
                      <>
                        <p className={styles.oldPrice}>
                          UAH {game.price}
                        </p>

                        <p className={styles.newPrice}>
                          UAH {finalPrice.toFixed(0)}
                        </p>
                      </>
                    ) : (
                      <p className={styles.normalPrice}>
                        UAH {game.price}
                      </p>
                    )}

                    </div>
                  </div>

                </li>
              )
            })}
          </ul>
        )}
      </div>

    </div>
  )
}

export default Wishlist