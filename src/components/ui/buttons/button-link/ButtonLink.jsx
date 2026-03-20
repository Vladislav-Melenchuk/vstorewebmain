import styles from './ButtonLink.module.css'
import linkIconLight from '../../../../assets/icons/general-icons/link-light.svg'
import linkIconDark from '../../../../assets/icons/general-icons/link-dark.svg'

const ButtonLink = ({title, onClick, variant = 'primary'}) => {

   const isPrimary = variant === 'primary';
   const icon = isPrimary ? linkIconDark : linkIconLight;

   return (
      <button onClick={onClick}
              className={`${styles.button} ${styles[variant]}`}>
         <span className={styles.title}>{title}</span>
         <img className='image' src={icon} alt='link icon'/>
      </button>
   )
}

export default ButtonLink;