import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackPlayerSpeed } from '/store/slices/playback'
import Menu from './Menu'
import MenuTitle from './Menu/title'
import { PlayerContext } from '/components/player'
import { SettingsContext } from './index'

export default function OtherSpeedMenu() {
  const { t } = useTranslation()
  const playbackSpeed = useAppSelector(selectPlaybackPlayerSpeed)
  const player = React.useContext(PlayerContext)
  const [progress, setProgress] = React.useState(0)
  const settingsContext = React.useContext(SettingsContext)

  const setSpeed = (newSpeed: number) => {
    if(!player) return

    player.playbackRate = newSpeed
  }

  React.useEffect(() => {
    setProgress(playbackSpeed / 2)
  }, [])

  return (
    <Menu>
      <MenuTitle 
        title={t('player.settings.speed_menu.other_speed')} 
        onClick={() => settingsContext.setTab('speed')}
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
          value={playbackSpeed}
        />
        <span className={styles.progress}>{playbackSpeed}x</span>
      </div>
    </Menu>
  )
}