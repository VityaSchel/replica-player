import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackPlayerSpeed } from '/store/slices/playback'
import Menu from './Menu'
import MenuItem from './Menu/item'
import MenuTitle from './Menu/title'
import { PlayerContext } from '/components/player'

export default function OtherSpeedMenu() {
  const { t } = useTranslation()
  const playbackSpeed = useAppSelector(selectPlaybackPlayerSpeed)
  const player = React.useContext(PlayerContext)
  // const range = React.useRef<HTMLInputElement>(null)
  const [progress, setProgress] = React.useState(0)

  const setSpeed = (newSpeed: number) => {
    if(!player) return

    player.playbackRate = newSpeed
  }

  return (
    <Menu>
      <MenuTitle 
        title={t('player.settings.speed_menu.other_speed')} 
        onClick={() => {}}
      />
      <div className={styles.otherSpeedContainer}>
        <input 
          type='range' 
          className={styles.otherSpeedRange}
          style={{ '--progress': `${progress * 100}%` } as React.CSSProperties} 
          // ref={range}
          onChange={event => {
            const range = event.target
            setProgress((Number(range.value) - Number(range.min)) / (Number(range.max) - Number(range.min)))
            setSpeed(Number(range.value))
          }}
          min={0.25}
          max={2}
          step={0.05}
        />
        <span className={styles.progress}>{progress*1.75 + 0.25}x</span>
      </div>
    </Menu>
  )
}