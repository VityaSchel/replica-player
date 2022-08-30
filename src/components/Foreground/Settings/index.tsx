import React from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import MainMenu from './MainMenu'
import SpeedMenu from './SpeedMenu'
import OtherSpeedMenu from './OtherSpeedMenu'

export type SettingsTab = 'main' | 'quality' | 'speed' | 'other_speed' | 'subtitles'

interface SettingsContextValue {
  tab: SettingsTab
  setTab: (newTab: SettingsTab) => void
}
const settingsContextDefaultValue = {
  tab: 'main',
  setTab: () => null
} as const

export const SettingsContext = React.createContext<SettingsContextValue>(settingsContextDefaultValue)

export default function Settings() {
  const [settingsTab, setSettingsTab] = React.useState<SettingsTab>('main')
  const [visible, setVisible] = React.useState(false)

  return (
    <SettingsContext.Provider value={{ tab: settingsTab, setTab: setSettingsTab }}>
      <div className={cx(styles.container, {
        [styles.visible]: visible
      }, styles[settingsTab])}>
        {settingsTab === 'main' && <MainMenu />}
        {settingsTab === 'speed' && <SpeedMenu />}
        {settingsTab === 'other_speed' && <OtherSpeedMenu />}
      </div>
    </SettingsContext.Provider>
  )
}