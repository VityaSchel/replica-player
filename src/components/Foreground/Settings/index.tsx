import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import MainMenu from './MainMenu'
import SpeedMenu from './SpeedMenu'

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
      {settingsTab === 'speed' && <SpeedMenu />}
    </div>
  )
}