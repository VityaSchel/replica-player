import React from 'react'
import styles from './styles.module.scss'
import PlayPauseIcon from '../icons/PlayPause'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackState } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import cx from 'classnames'

export default function PlayPause() {
  const playbackState = useAppSelector(selectPlaybackState)
  const player = React.useContext(PlayerContext)

  const handleClick = () => {
    playbackState === 'playing' ? player?.pause() : player?.play()
  }

  return (
    <button className={cx(styles.controlsButton, styles.playControlButton)} onClick={handleClick}>
      <PlayPauseIcon playing={playbackState === 'playing'} />
    </button>
  )
}