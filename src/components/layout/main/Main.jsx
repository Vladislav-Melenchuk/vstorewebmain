import TopGame from '../../ui/top/TopGame.jsx'
import Advertising from '../../ui/adverising/Adverising.jsx'
import AdvertisingSlider from '../../ui/advertising-slider/AdvertisingSlider.jsx'
import Featured from '../../ui/featured/Featured.jsx'
import Mobile from '../../ui/mobile/Mobile.jsx'
import FreeGames from '../../ui/free/FreeGames.jsx'
import styles from './Main.module.css'
import ViewMore from '../../modals/view-more/ViewMore.jsx'
import { useState } from 'react'
import InstallMobile from '../../modals/install-mobile/InstallMobile.jsx'

const Main = () => {

   const propsData = [
      {
         title: 'Discover Something',
      },
      {
         title: 'Winter Sale Spotlight',
      },
      {
         // data:'/data/featured-cards.json'
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

   const [modalViewMoreOpen, setModalViewMoreOpen] = useState(false);
   const [modalMobileInstallOpen, setModalMobileInstallOpen] = useState(false);
 
   return (
      <>
       <main className={styles.container}>
         <TopGame />
         <AdvertisingSlider {...propsData[1]} type="sale"/>
         <Advertising {...propsData[0]} type="fullPrice"/>
         <Featured {...propsData[2]}/>
         <FreeGames onOpenModal={() => setModalViewMoreOpen(true)}/>
         <Mobile onOpenModal={() => setModalMobileInstallOpen(true)}/>
         <Advertising {...propsData[3]} />
         <Advertising {...propsData[4]} />
         <AdvertisingSlider {...propsData[5]} type="sale"/>
      </main>

      <ViewMore
         isOpen={modalViewMoreOpen}
         onClose={() => setModalViewMoreOpen(false)}/>

      <InstallMobile 
         isOpen={modalMobileInstallOpen}
         onClose={() => setModalMobileInstallOpen(false)}/>
      </>
   )
}

export default Main;