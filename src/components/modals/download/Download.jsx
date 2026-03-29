import styles from './Download.module.css'

const Download = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Download!</h2>

        <p className={styles.text}>
          Nothing to download.. 🚀
        </p>

        <button className={styles.button} onClick={onClose}>
          Sorry..
        </button>
      </div>
      </div>

  )
};

export default Download;