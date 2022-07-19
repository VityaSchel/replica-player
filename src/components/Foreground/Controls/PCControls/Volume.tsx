import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackIsMuted, selectPlaybackVolume } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import VolumeIcon from '../icons/Volume'

export default function Volume() {
  const volume = useAppSelector(selectPlaybackVolume)
  const isMuted = useAppSelector(selectPlaybackIsMuted)
  const player = React.useContext(PlayerContext)

  const handleClick = () => {
    if (player) player.muted = !isMuted
  }

  const setVolume = (volume: number) => {
    if(player) player.volume = volume
  }

  const setMuted = (muted: boolean) => {
    if(player) player.muted = muted
  }

  return (
    <>
      <button className={styles.controlsButton} onClick={handleClick}>
        <VolumeIcon
          volume={volume}
          setVolume={setVolume}
          muted={isMuted}
          setMuted={setMuted}
        />
      </button>
      <div className={styles.volume}>

      </div>
    </>
  )
}