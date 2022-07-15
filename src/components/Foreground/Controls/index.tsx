import React from 'react'
import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'

export default function Controls(props: PlayerProps) {
  return (
    <div
      className={styles.controls}
      {...props.componentsProps?.controls}
    >
      <button></button>
    </div>
  )
}