import React from 'react'
import styles from './styles.module.scss'
import PlayPauseIcon from '../icons/PlayPause'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlaybackIsMuted, selectPlaybackState, setMuted } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import VolumeMute from '/components/Foreground/Controls/icons/Volume/VolumeMute'

export default function Volume() {
  const isMuted = useAppSelector(selectPlaybackIsMuted)
  const dispatch = useAppDispatch()
  const context = React.useContext(PlayerContext)

  const handleClick = () => {
    // playbackState === 'playing' ? context?.pause() : context?.play()
    dispatch(setMuted(!isMuted))
  }

  return (
    <button className={styles.controlsButton} onClick={handleClick}>
      <VolumeMute muted={isMuted} />
    </button>
  )
}