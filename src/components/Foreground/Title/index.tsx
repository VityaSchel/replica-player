import React from 'react'
import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'

export default function Title(props: PlayerProps) {
  const shown = false
  return (
    <div className={styles.title} style={{ display: shown ? undefined : 'none' }}>

    </div>
  )
}