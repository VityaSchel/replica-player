import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import MainMenu from './MainMenu'
import SpeedMenu from './SpeedMenu'
import OtherSpeedMenu from './OtherSpeedMenu'

export type SettingsTabs = 'main' | 'quality' | 'speed' | 'other_speed' | 'subtitles'

export default function Settings() {
  const [settingsTab, setSettingsTab] = React.useState<SettingsTabs>('other_speed')
  const [visible, setVisible] = React.useState(true)

  return (
    <div className={cx(styles.container, {
      [styles.visible]: visible
    }, styles[settingsTab])}>
      {settingsTab === 'main' && <MainMenu />}
      {settingsTab === 'speed' && <SpeedMenu />}
      {settingsTab === 'other_speed' && <OtherSpeedMenu />}
    </div>
  )
}