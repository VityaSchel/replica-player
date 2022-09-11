import React from 'react'
import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'
import PlayPause from './PlayPause'
import { Backwards, Forwards } from './PlaylistButtons'
import Volume from './Volume'
import SeekBar from './SeekBar'
import Timer from './Timer'
import Autoplay from './Autoplay'
import Subtitles from './Subtitles'
import Settings from './Settings'
import Fullscreen from './Fullscreen'
import CircleIndicator from './CircleIndicator'

export default function PCControls(props: PlayerProps) {
  const volumeRef = React.useRef<{ unhover: () => void }>()

  return (
    <>
      <div className={styles.background} />
      <CircleIndicator />
      <div
        className={styles.controlsContainer}
        {...props.componentsProps?.controls}
      >
        <SeekBar {...props} />
        <div className={styles.controls}>
          <div 
            className={styles.left}
            onMouseLeave={() => volumeRef.current?.unhover()}
          >
            <Backwards />
            <PlayPause />
            <Forwards />
            <Volume ref={volumeRef} />
            <Timer />
          </div>
          <div className={styles.right}>
            <Autoplay />
            <Subtitles />
            <Settings />
            <Fullscreen />
          </div>
        </div>
      </div>
    </>
  )
}