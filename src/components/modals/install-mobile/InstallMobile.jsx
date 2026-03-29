import { useState } from 'react'
import styles from './InstallMobile.module.css'

const InstallMobile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Install mibile!</h2>

        <p className={styles.text}>
          You can install store for mobile. 🚀
        </p>

        <button className={styles.button} onClick={onClose}>
          Install
        </button>
      </div>
    </div>
  )
}

export default InstallMobile;