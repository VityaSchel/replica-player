import React from 'react'
import styles from './styles.module.scss'
import PlayPauseIcon from '../icons/PlayPause'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlaybackIsMuted, selectPlaybackVolume, setVolume, setMuted } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import VolumeIcon from '../icons/Volume'

export default function Volume() {
  const volume = useAppSelector(selectPlaybackVolume)
  const isMuted = useAppSelector(selectPlaybackIsMuted)
  const dispatch = useAppDispatch()
  const context = React.useContext(PlayerContext)

  const handleClick = () => {
    // playbackState === 'playing' ? context?.pause() : context?.play()
    dispatch(setMuted(!isMuted))
  }

  return (
    <button className={styles.controlsButton} onClick={handleClick}>
      <VolumeIcon
        volume={volume}
        setVolume={setVolume}
        muted={isMuted}
        setMuted={setMuted}
      />
    </button>
  )
}