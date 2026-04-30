import styles from './Discover.module.css'

const Discover = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Discover!</h2>

        <p className={styles.text}>
          Nothing to discover.. 🚀
        </p>

        <button className={styles.button} onClick={onClose}>
          Sorry..
        </button>
      </div>
      </div>

  )
};

export default Discover;