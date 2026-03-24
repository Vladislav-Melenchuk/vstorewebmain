import styles from './LanguageModal.module.css'

const LanguageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.icon}>🌍</div>

        <h2 className={styles.title}>Language settings</h2>

        <p className={styles.text}>
          This feature is not available yet.
        </p>

        <p className={styles.subtext}>
          We’re working on improving the experience 🚀
        </p>

        <div className={styles.fakeList}>
          <div className={styles.item}>🇬🇧 English</div>
          <div className={styles.item}>🇺🇦 Ukrainian</div>
          <div className={styles.item}>🇵🇱 Polish</div>
        </div>

        <button className={styles.button} onClick={onClose}>
          Got it
        </button>

      </div>
    </div>
  )
}

export default LanguageModal