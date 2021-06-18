import React from 'react'

import styles from './styles.module.less'

export default function Background() {
  return (
    <div className={styles.background}>
      <div className={styles['bg-item-0']} />
      <div className={styles['bg-item-1']} />
      <div className={styles['bg-item-2']} />
      <div className={styles['bg-item-3']} />
      <div className={styles['bg-item-5']} />
      <div className={styles['bg-item-4']} />
    </div>
  )
}
