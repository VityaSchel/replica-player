import React from 'react'
import styles from './styles.module.scss'
import PlayPauseIcon from '../icons/PlayPause'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlaybackState, setPlaybackState } from '/store/slices/playback'
import { PlayerContext } from '/components/player'

export default function PlayPause() {
  const playbackState = useAppSelector(selectPlaybackState)
  const dispatch = useAppDispatch()
  const context = React.useContext(PlayerContext)

  const handleClick = () => {
    playbackState === 'playing' ? context?.pause() : context?.play()
    dispatch(setPlaybackState(playbackState === 'playing' ? 'paused' : 'playing'))
  }

  return (
    <button className={styles.controlsButton} onClick={handleClick}>
      <PlayPauseIcon playing={playbackState === 'playing'} />
    </button>
  )
}