import React from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import SettingsIcon from '../icons/Settings'
import { selectSettingsMenuVisible, setSettingsMenuVisible } from '/store/slices/ui'
import SettingsMenu from '../../Settings/index'

export default function Settings() {
  const settingsMenuVisible = useAppSelector(selectSettingsMenuVisible)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setSettingsMenuVisible(!settingsMenuVisible))
  }

  return (
    <>
      <button 
        className={styles.controlsButton}
        onClick={handleClick}
      >
        <SettingsIcon active={settingsMenuVisible} />
      </button>
      <SettingsMenu />
    </>
  )
}