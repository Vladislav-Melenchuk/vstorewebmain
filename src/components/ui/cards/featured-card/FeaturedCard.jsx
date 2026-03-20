import styles from './FeaturedCard.module.css'
import ButtonLink from '../../buttons/button-link/ButtonLink.jsx'

const buttonText = 'See In Shop';

const FeaturedCard = ({src, title, alt, info}) => {
   return (
      <div className={styles.container}>
         <img src={src} alt={alt} className={styles.image}/>
         <div className={styles.info}>
            <h3>{title}</h3>
            <p>{info}</p>
            <ButtonLink title={buttonText} variant='secondary'/>
         </div>
      </div>
   )
}

export default FeaturedCard;