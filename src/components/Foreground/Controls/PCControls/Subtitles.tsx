import React from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import cx from 'classnames'
import { selectAutoplay, setAutoplay } from '/store/slices/playlist'

export default function Subtitles() {
  const autoplay = useAppSelector(selectAutoplay)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setAutoplay(!autoplay))
  }

  return (
    <button className={styles.controlsButton} onClick={handleClick}>
      <div className={cx(styles.switchButton, { [styles.active]: autoplay })} />
    </button>
  )
}