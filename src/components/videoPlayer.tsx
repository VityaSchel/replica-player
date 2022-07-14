import React from 'react'
import styles from '../styles.module.scss'
import type { PlayerProps } from './player'

export default function videoPlayer(props: PlayerProps) {
  return (
    <video className={styles.videoPlayer}>
      <source src={props.src} />
    </video>
  )
}