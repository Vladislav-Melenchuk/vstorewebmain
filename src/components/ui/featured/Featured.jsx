import { useState, useEffect } from 'react'
import styles from './Featured.module.css'
import FeaturedCard from '../cards/featured-card/FeaturedCard.jsx'

const Featured = ({data}) => {

   const [cardsFeatured, setCardsFeatured] = useState([]);
   
   useEffect(() => {
      fetch(data)
      .then((res) => res.json())
      .then((data) => setCardsFeatured(data))
      .catch((err) => console.error("Ошибка загрузки JSON:", err));

   },[data]);

   return (
      <div className={styles.container}>
         <ul>
            {cardsFeatured.map((card, index) => (
               <li key={index}>
                  <FeaturedCard {...card}/>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Featured;