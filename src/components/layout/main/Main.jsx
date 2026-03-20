import TopGame from '../../ui/top/TopGame.jsx'
import Advertising from '../../ui/adverising/Adverising.jsx'
import Featured from '../../ui/featured/Featured.jsx'
import Mobile from '../../ui/mobile/Mobile.jsx'
import FreeGames from '../../ui/free/FreeGames.jsx'
import styles from './Main.module.css'

const Main = () => {

   const propsData = [
      {
         title: 'Discover Something',
      },
      {
         title: 'Winter Sale Spotlight',
      },
      {
         data:'/data/featured-cards.json'
      },
      {
         title: 'Popular Games',
      },
      {
         title: 'Recently Updated',
      },
      {
         title: 'Now On The  Store',
      }
   ]
 
   return (
      <main className={styles.container}>
         <TopGame />
         <Advertising {...propsData[0]} type="fullPrice"/>
         <Advertising {...propsData[1]} type="sale"/>
         <Featured {...propsData[2]}/>
         <FreeGames />
         <Mobile/>
         <Advertising {...propsData[3]} />
         <Advertising {...propsData[4]} />
         <Advertising {...propsData[5]} />
      </main>
   )
}

export default Main;