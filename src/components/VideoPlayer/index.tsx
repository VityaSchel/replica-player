import React from 'react'
import styles from '../../styles.module.scss'
import type { PlayerProps } from '../player'
import cx from 'classnames'
import * as events from '/events/videoPlayer'
import { useAppDispatch } from '/store/hooks'
import { useAppSelector } from '/store/hooks'
import { selectSelectedSource, setSources, setSourceURI } from '/store/slices/playsource'
import { setPlaybackState } from '/store/slices/playback'
import { mergeRefs } from 'react-merge-refs'
import { setSubtitlesList } from '/store/slices/subtitles'

const VideoPlayer = React.forwardRef((props: PlayerProps, externalRef: React.LegacyRef<HTMLVideoElement>) => {
  const dispatch = useAppDispatch()
  const playsource = useAppSelector(selectSelectedSource)
  const internalRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    dispatch(setSources(props.src.map(src => ({ sourceURI: src.uri, quality: src.quality }))))
    dispatch(setSourceURI(props.src[0].uri))
  }, [props.src])

  React.useEffect(() => {
    if(!internalRef.current) return
    const seekPosition = internalRef.current.currentTime
    const isPlaying = !internalRef.current.paused
    internalRef.current.pause()
    dispatch(setPlaybackState('loading'))
    internalRef.current.load()
    if(seekPosition === 0) return
    
    const canPlay = (event: Event) => {
      const target: HTMLVideoElement = event.target as HTMLVideoElement
      if(target) {
        target.currentTime = seekPosition 
        isPlaying && target.play()
      }
      internalRef?.current?.removeEventListener('canplay', canPlay)
    }
    internalRef.current.addEventListener('canplay', canPlay)
  }, [internalRef, playsource])
  
  React.useEffect(() => {
    dispatch(setSubtitlesList(props.subtitles.map(subtitles => ({ fileID: subtitles.fileURI, name: subtitles.name }))))
  }, [props.subtitles])

  return (
    <video 
      className={cx(styles.videoPlayer, { 
        [styles.aspectRatioModeFit]: props.resizeMode === 'fit',
        [styles.aspectRatioModeCover]: props.resizeMode === 'cover',
        [styles.aspectRatioModeResize]: props.resizeMode === 'fill',
      })}

      {...events}
      
      ref={mergeRefs([internalRef, externalRef])}
    >
      <source src={playsource?.sourceURI} />
    </video>
  )
})
VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer