import styles from './Mobile.module.css'
import mobileImg from '../../../assets/img/general-img/mobile.png'
import ButtonLink from '../buttons/button-link/ButtonLink.jsx'

const Mobile = () => {
   return (
      <div className={styles.container}>
         <img src={mobileImg} alt='/' className={styles.image}/>

         <div className={styles.description}>
            
            <div className={styles.wrapper}>
               <h3>Vision Store Mobile</h3>
               <p>
                  Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance.
               </p>
            
               <ButtonLink title='Install Mobile' bgColor='var(--color-green)' textColor='var(--color-black)'/>
            </div>
      
         </div>
      </div>
   )
}

export default Mobile;