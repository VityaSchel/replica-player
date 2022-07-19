import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'
import cx from 'classnames'
// import { useAppDispatch } from '/store/hooks'
import * as events from './events'

const VideoPlayer = React.forwardRef((props: PlayerProps, ref) => {
  // const videoRef = ref as React.RefObject<HTMLVideoElement>
  // const dispatch = useAppDispatch()

  // React.useEffect(() => {
  //   if(!videoRef.current) return

  //   const {
  //     onVolumeChange
  //   } = init(dispatch)
  //   videoRef.current.addEventListener('volumechange', onVolumeChange)
  // }, [videoRef])

  return (
    <video 
      className={cx(styles.videoPlayer, { 
        [styles.aspectRatioModeFit]: props.resizeMode === 'fit',
        [styles.aspectRatioModeCover]: props.resizeMode === 'cover',
        [styles.aspectRatioModeResize]: props.resizeMode === 'fill',
      })}

      {...events}

      ref={ref as React.LegacyRef<HTMLVideoElement>}
    >
      <source src={props.src} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer