import styles from'./Home.module.css'
import Main from '../../components/layout/main/Main.jsx'

const Home = () => {
   return(
      <>
         <div className={styles.container}>
            <Main />
         </div>
      </>
   )
}

export default Home;