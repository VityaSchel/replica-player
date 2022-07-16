import React from 'react'
import styles from './styles.module.scss'
import Spinner from './Spinner'
import Warning from './Warning'
import { PlayerProps } from '/components/player'

export default function Loading(props: PlayerProps) {
  // use context, decide when to show loading

  return (
    <div className={styles.loading}>
      <Spinner />
      <Warning />
    </div>
  )
}