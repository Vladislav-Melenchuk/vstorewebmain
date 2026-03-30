import { useEffect, useState } from 'react'
import styles from './AdvertisingSlider.module.css'
import Card from "../cards/card/Card"
import Button from '../buttons/button/Button.jsx'

import { useGames } from '../../../hooks/useGames'
import { useSaleGames } from '../../../hooks/useSaleGames'
import { useFullPriceGames } from '../../../hooks/useFullPriceGames'

const AdvertisingSlider = ({ title, type }) => {
  const [showAll, setShowAll] = useState(false);

  const { games } = useGames();
  const { games: saleGames } = useSaleGames();
  const { games: fullPriceGame } = useFullPriceGames();

  const [index, setIndex] = useState(0);

  const data =
    type === 'sale'
      ? saleGames
      : type === 'fullPrice'
        ? fullPriceGame
        : games

  const maxIndex = Math.max(0, data.length - 7)

  // reset index при смене данных
  useEffect(() => {
    setIndex(0)
  }, [data.length])

  // autoplay
  useEffect(() => {
    if (data.length <= 7) return

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(intervalId)
  }, [data.length, maxIndex])

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1))
  }

  const visibleCards = showAll
    ? data
    : data.slice(index, index + 7)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {/* CARDS */}
      <ul className={styles.list}>
        {visibleCards.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>

      {/* DOTS (под карточками) */}
      {!showAll && data.length > 7 && (
        <div className={styles.advertisingDots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.dot} ${i === index ? styles.active : ''}`}
            />
          ))}
        </div>
      )}

      {/* SHOW ALL */}
      {data.length > 7 && (
        <Button
          title={showAll ? 'Hide all games' : 'All games'}
          variant="positioned"
          size="small"
          onClick={() => {
            setShowAll((prev) => !prev)
            setIndex(0)
          }}
        />
      )}

      {/* ARROWS */}
      {!showAll && (
        <>
          <button
            className={`${styles.advertisingBtn} ${styles.prev}`}
            onClick={prevSlide}
          >
            ‹
          </button>

          <button
            className={`${styles.advertisingBtn} ${styles.next}`}
            onClick={nextSlide}
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

export default AdvertisingSlider;