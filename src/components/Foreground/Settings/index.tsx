import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackPlayerSpeed } from '/store/slices/playback'
import { selectSubtitlesName } from '/store/slices/subtitles'
import { selectPlaysourceVideoQuality } from '/store/slices/playsource'

export type SettingsTabs = 'main' | 'quality' | 'speed' | 'subtitles'

export default function Settings() {
  const [settingsTab, setSettingsTab] = React.useState<SettingsTabs>('main')
  const [visible, setVisible] = React.useState(true)

  return (
    <div className={cx(styles.container, {
      [styles.visible]: visible
    }, {
      [styles.main]: settingsTab === 'main',
      [styles.quality]: settingsTab === 'quality',
      [styles.speed]: settingsTab === 'speed',
      [styles.subtitles]: settingsTab === 'subtitles'
    })}>
      {settingsTab === 'main' && <MainMenu />}
    </div>
  )
}

function Menu(props: { children: React.ReactNode[] | React.ReactNode }) {
  return (
    <div className={styles.menu}>
      {props.children}
    </div>
  )
}

interface MenuItemProps {
  icon?: React.ReactNode
  onClick?: () => void
  children: React.ReactNode
  endAdornment?: React.ReactNode
  buttonProps?: object
}
function MenuItem(props: MenuItemProps) {
  return (
    <button className={styles.menuItem} {...props.buttonProps} onClick={props.onClick}>
      <span className={styles.icon}>{props.icon}</span>
      <span className={styles.children}>{props.children}</span>
      <span className={cx(styles.endAdornment, styles.rightArrow)}>{props.endAdornment}</span>
    </button>
  )
}

function MainMenu() {
  const { t } = useTranslation()
  const playbackSpeed = useAppSelector(selectPlaybackPlayerSpeed)
  const subtitlesName = useAppSelector(selectSubtitlesName)
  const quality = useAppSelector(selectPlaysourceVideoQuality)

  return (
    <Menu>
      <MenuItem
        endAdornment={playbackSpeed === 1 ? t('player.settings.speed_menu.normal') : playbackSpeed}
      >
        {t('player.settings.speed_menu.title')}
      </MenuItem>
      <MenuItem
        endAdornment={subtitlesName ?? t('player.settings.subtitles_menu.disabled')}
      >
        {t('player.settings.subtitles_menu.title')}
      </MenuItem>
      <MenuItem
        endAdornment={quality}
      >
        {t('player.settings.quality_menu.title')}
      </MenuItem>
    </Menu>
  )
}