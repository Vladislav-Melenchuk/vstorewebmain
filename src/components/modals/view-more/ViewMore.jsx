import styles from './ViewMore.module.css'

const ViewMore = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>View more free games:</h2>

        <p className={styles.text}>
          There are enough free games as it is. 
          <span>Play these first. 🚀</span>
        </p>

        <button className={styles.button} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  )
};

export default ViewMore;