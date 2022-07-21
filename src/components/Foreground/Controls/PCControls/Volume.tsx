import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackIsMuted, selectPlaybackVolume } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import VolumeIcon from '../icons/Volume'
import cx from 'classnames'

const barWidth = 52
const tipWidth = 12
const tipMargin = 0

export default function Volume() {
  const volumeState = useAppSelector(selectPlaybackVolume)
  const isMuted = useAppSelector(selectPlaybackIsMuted)
  const volume = isMuted ? 0 : volumeState
  const player = React.useContext(PlayerContext)
  const [active, setActive] = React.useState(true)
  const [dragging, setDragging] = React.useState(false)

  const handleClick = () => {
    if (player) player.muted = !isMuted
  }

  const setVolume = (volume: number) => {
    if(player) player.volume = volume
  }

  const setMuted = (muted: boolean) => {
    if(player) player.muted = muted
  }

  const handleDragEnd = () => {
    setDragging(false)
    window.removeEventListener('mouseup', handleDragEnd)
    window.removeEventListener('mousemove', handleMouseMove)
    console.log('asdad')
  }

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true)
    handleMouseMove(e)
    window.addEventListener('mouseup', handleDragEnd)
    window.addEventListener('mousemove', handleMouseMove)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
    // console.log(e)
  }

  return (
    <>
      <button 
        className={styles.controlsButton} 
        onClick={handleClick}
        // onMouseEnter={() => setActive(true)}
        // onMouseLeave={() => setActive(false)}
      >
        <VolumeIcon
          volume={volume}
          setVolume={setVolume}
          muted={isMuted}
          setMuted={setMuted}
        />
      </button>
      <div 
        className={cx(styles.volumeControls, { [styles.active]: active })}
        // onMouseOut={() => setActive(false)}
        onMouseDown={handleDragStart}
        // onMouseMove={e => dragging && console.log(e)}
        // onMouseUp={handleDragEnd}
        draggable='false'
      >
        <div className={styles.volumeBar} draggable='false'>
          <div 
            className={styles.volume} 
            style={{ width: `${volume * 100}%` }} 
            draggable='false'
          />
          <div 
            className={styles.tip} 
            style={{ left: `${volume * (barWidth - tipWidth - tipMargin * 2) + tipMargin}px` }} 
            draggable='false'
          />
        </div>
      </div>
    </>
  )
}