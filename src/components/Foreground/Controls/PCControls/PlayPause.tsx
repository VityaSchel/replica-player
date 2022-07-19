import React from 'react'
import styles from './styles.module.scss'
import PlayPauseIcon from '../icons/PlayPause'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlaybackState, setPlaybackState } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import cx from 'classnames'

export default function PlayPause() {
  const playbackState = useAppSelector(selectPlaybackState)
  const dispatch = useAppDispatch()
  const player = React.useContext(PlayerContext)

  const handleClick = () => {
    playbackState === 'playing' ? player?.pause() : player?.play()
    dispatch(setPlaybackState(playbackState === 'playing' ? 'paused' : 'playing'))
  }

  return (
    <button className={cx(styles.controlsButton, styles.playControlButton)} onClick={handleClick}>
      <PlayPauseIcon playing={playbackState === 'playing'} />
    </button>
  )
}