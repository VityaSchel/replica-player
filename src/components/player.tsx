import * as React from 'react'
import styles from '../styles.module.scss'
import NoStylesWarning from './NoStylesWarning'
import VideoPlayer from './videoPlayer'

export interface PlayerProps {
  src: string
}

export default function Player(props: PlayerProps) {
  return (
    <>
      <NoStylesWarning />
      <div className={styles.replicaPlayer} style={{ display: 'none' }}>
        <VideoPlayer {...props} />
      </div>
    </>
  )
}