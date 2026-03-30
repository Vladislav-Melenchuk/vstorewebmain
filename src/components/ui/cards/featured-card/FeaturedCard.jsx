import styles from './FeaturedCard.module.css'
import ButtonLink from '../../buttons/button-link/ButtonLink.jsx'
import { Link } from 'react-router-dom'

const buttonText = 'See In Shop';

const FeaturedCard = ({game, src, title, alt, info}) => {
   return (
      <div className={styles.container}>
         <img src={src} alt={alt} className={styles.image}/>
         <div className={styles.info}>
            <h3>{title}</h3>
            <p>{info}</p>
            <Link to={`/game/${game.id}`} state={{ game }}>
               <ButtonLink title={buttonText} variant='secondary' />
            </Link>
         </div>
      </div>
   )
}

export default FeaturedCard;