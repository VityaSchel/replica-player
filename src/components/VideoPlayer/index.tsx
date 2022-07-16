import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'

const VideoPlayer = React.forwardRef((props: PlayerProps, ref) => {
  return (
    <video className={styles.videoPlayer} ref={ref as React.LegacyRef<HTMLVideoElement>}>
      <source src={props.src} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer