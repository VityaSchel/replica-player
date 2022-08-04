import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'
import cx from 'classnames'
import * as events from '/events/videoPlayer'
import { useAppDispatch } from '/store/hooks'
import { useAppSelector } from '/store/hooks'
import { selectPlaysourceSourceURI, setQuality, setSourceURI } from '/store/slices/playsource'

const VideoPlayer = React.forwardRef((props: PlayerProps, externalRef) => {
  const dispatch = useAppDispatch()
  const sourceURI = useAppSelector(selectPlaysourceSourceURI)

  React.useEffect(() => {
    dispatch(setQuality(props.src[0].quality))
    dispatch(setSourceURI(props.src[0].uri))
  }, [props.src])
  
  return (
    <video 
      className={cx(styles.videoPlayer, { 
        [styles.aspectRatioModeFit]: props.resizeMode === 'fit',
        [styles.aspectRatioModeCover]: props.resizeMode === 'cover',
        [styles.aspectRatioModeResize]: props.resizeMode === 'fill',
      })}

      {...events}
      
      ref={externalRef as React.LegacyRef<HTMLVideoElement>}
    >
      <source src={sourceURI} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer