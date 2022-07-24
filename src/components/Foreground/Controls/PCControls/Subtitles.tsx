import React from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import cx from 'classnames'
import SubtitlesIcon from '../icons/subtitles.svg'
import { selectSubtitlesEnabled, setSubtitlesEnabled } from '/store/slices/subtitles'

export default function Subtitles() {
  const subtitlesEnabled = useAppSelector(selectSubtitlesEnabled)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setSubtitlesEnabled(!subtitlesEnabled))
  }

  return (
    <button 
      className={styles.controlsButton}
      onClick={handleClick}
    >
      <div
        className={cx(styles.toggleButton, { [styles.active]: subtitlesEnabled })} 
      >
        <SubtitlesIcon />
      </div>
    </button>
  )
}