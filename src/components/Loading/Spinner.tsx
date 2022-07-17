import React from 'react'
import styles from './styles.module.scss'

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.spinnerLeft}>
          <div className={styles.spinnerCircle} />
        </div>
        <div className={styles.spinnerRight}>
          <div className={styles.spinnerCircle} />
        </div>
      </div>
    </div>
  )
}