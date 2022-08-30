import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackPlayerSpeed } from '/store/slices/playback'
import Menu from './Menu'
import MenuItem from './Menu/item'
import MenuTitle from './Menu/title'
import CheckIcon from './icons/check.svg'
import { PlayerContext } from '/components/player'
import { SettingsContext } from './index'

export default function SpeedMenu() {
  const { t } = useTranslation()
  const playbackSpeed = useAppSelector(selectPlaybackPlayerSpeed)
  const player = React.useContext(PlayerContext)
  const settingsContext = React.useContext(SettingsContext)

  const setSpeed = (newSpeed: number) => {
    if(!player) return

    player.playbackRate = newSpeed
  }

  return (
    <Menu>
      <MenuTitle 
        title={t('player.settings.speed_menu.title')} 
        onClick={() => settingsContext.setTab('main')}
        endAdornment={
          <button 
            className={styles.otherSpeed} 
            onClick={() => settingsContext.setTab('other_speed')}
          >
            {t('player.settings.speed_menu.other')}
          </button>
        }
      />
      {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(itemSpeedLabel => (
        <MenuItem
          icon={playbackSpeed === itemSpeedLabel && <CheckIcon width={18} />}
          key={itemSpeedLabel}
          onClick={() => setSpeed(itemSpeedLabel)}
        >
          {itemSpeedLabel === 1 ? t('player.settings.speed_menu.normal') : itemSpeedLabel}
        </MenuItem>
      ))}
    </Menu>
  )
}