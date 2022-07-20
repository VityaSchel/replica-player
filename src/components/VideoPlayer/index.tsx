import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'
import cx from 'classnames'
// import { useAppDispatch } from '/store/hooks'
import * as events from './events'
// import { mergeRefs } from 'react-merge-refs'

const VideoPlayer = React.forwardRef((props: PlayerProps, externalRef) => {
  // const internalRef = React.useRef()
  // // const dispatch = useAppDispatch()

  // React.useEffect(() => {
  //   if (!internalRef.current) return

  //   // const {
  //   //   onVolumeChange
  //   // } = init(dispatch)
  //   // videoRef.current.addEventListener('volumechange', onVolumeChange)
  //   Object.defineProperty(internalRef.current, 'loop', { set: events._onLoopPropertyChange })
  // }, [internalRef])

  return (
    <video 
      className={cx(styles.videoPlayer, { 
        [styles.aspectRatioModeFit]: props.resizeMode === 'fit',
        [styles.aspectRatioModeCover]: props.resizeMode === 'cover',
        [styles.aspectRatioModeResize]: props.resizeMode === 'fill',
      })}

      {...Object.fromEntries(Object.entries(events).filter(([key]) => !key.startsWith('_')))}
      
      // ref={mergeRefs([externalRef, internalRef]) as React.LegacyRef<HTMLVideoElement>}
      ref={externalRef as React.LegacyRef<HTMLVideoElement>}
    >
      <source src={props.src} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer