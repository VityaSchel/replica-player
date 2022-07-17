import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'
import cx from 'classnames'

const VideoPlayer = React.forwardRef((props: PlayerProps, ref) => {
  return (
    <video className={cx(styles.videoPlayer, { 
      [styles.aspectRatioModeFit]: props.resizeMode === 'fit',
      [styles.aspectRatioModeCover]: props.resizeMode === 'cover',
      [styles.aspectRatioModeResize]: props.resizeMode === 'fill',
    })} ref={ref as React.LegacyRef<HTMLVideoElement>}>
      <source src={props.src} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer