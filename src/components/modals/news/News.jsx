import styles from './News.module.css'

const News = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>News!</h2>

        <p className={styles.text}>
          No NEWS.. 🚀
        </p>

        <button className={styles.button} onClick={onClose}>
          Sorry..
        </button>
      </div>
      </div>

  )
};

export default News;