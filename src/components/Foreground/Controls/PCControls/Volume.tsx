import React, { useImperativeHandle } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackIsMuted, selectPlaybackVolume } from '/store/slices/playback'
import { PlayerContext } from '/components/player'
import VolumeIcon from '../icons/Volume'
import cx from 'classnames'

const barWidth = 52
const tipWidth = 12
const tipMargin = 0

const Volume = React.forwardRef((props, ref) => {
  const volumeState = useAppSelector(selectPlaybackVolume)
  const isMuted = useAppSelector(selectPlaybackIsMuted)
  const volume = isMuted ? 0 : volumeState
  const player = React.useContext(PlayerContext)
  const [active, setActive] = React.useState(false)
  const [dragging, setDragging] = React.useState<{ active: boolean, relativePos: number }>({ active: false, relativePos: 0 })
  const sliderRef = React.useRef<HTMLDivElement>(null)

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
    setDragging({ active: false, relativePos: 0 })
    window.removeEventListener('mouseup', handleDragEnd)
    window.removeEventListener('mousemove', handleMouseMove)
  }

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!sliderRef.current) return

    const relativePos = sliderRef.current.getBoundingClientRect().left + window.scrollX
    setDragging({ active: true, relativePos })
    handleMouseMove(e, relativePos)
  }

  React.useEffect(() => {
    if (!dragging.active) return

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleDragEnd)
  }, [dragging])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent, relativePos: number = dragging.relativePos) => {
    if (!sliderRef.current || !player) return

    const newValue = Math.max(Math.min(barWidth, e.pageX - relativePos), 0) / barWidth
    if (player.muted && newValue > 0) player.muted = false
    player.volume = newValue
  }

  React.useImperativeHandle(ref, () => ({
    unhover() {
      setActive(false)
    }
  }))

  return (
    <>
      <button 
        className={styles.controlsButton} 
        onClick={handleClick}
        onMouseEnter={() => setActive(true)}
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
        onMouseEnter={() => setActive(true)}
        // onMouseLeave={() => setActive(false)}
        onMouseDown={handleDragStart}
        ref={sliderRef as React.LegacyRef<HTMLDivElement>}
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
})
Volume.displayName = 'Volume'
export default Volume