import styles from'./Support.module.css'
import {Search} from '../../components/layout/header/Search.jsx'
import Button from '../../components/ui/buttons/button/Button.jsx'

const Support = () => {
   return(

         <div className={styles.container}>
            <h2 className={styles.title}>Support</h2>
            <Search placeholder='Find help' className={styles.search}/>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span>Game problems</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Refund</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>My account</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Client</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Community problems</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Game problems</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Device problems</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Gifts</span>
                <span>&gt;</span>
              </li>

              <li className={styles.item}>
                <span>Frequent questions</span>
                <span>&gt;</span>
              </li>
            </ul>

            <div className={styles.questions}>
              <h4>Have any other questions?</h4>
              <Button title='Contact us on our email!' size='xlarge' variant='primary' />
            </div>
         </div>
   )
}

export default Support;