import React from 'react'
import styles from './styles.module.scss'
import BackwardsIcon from '../icons/backwards.svg'
import ForwardsIcon from '../icons/forwards.svg'
import { useAppDispatch, useAppSelector } from '/store/hooks'
import { selectPlaylistState, setPlayingIndex } from '/store/slices/playlist'
import { PlayerContext } from '/components/player'
import cx from 'classnames'

export function Backwards() {
  const playlistState = useAppSelector(selectPlaylistState)
  const dispatch = useAppDispatch()
  const context = React.useContext(PlayerContext)

  const handleClick = () => {
    dispatch(setPlayingIndex(playlistState.playingIndex - 1))
  }

  return (
    <button 
      className={cx(styles.controlsButton, { [styles.hide]: !playlistState.playlistVideosLinks.length })}
      onClick={handleClick} 
      disabled={
        !playlistState.playlistVideosLinks.length
        || playlistState.playingIndex === 0
      }
    >
      <BackwardsIcon />
    </button>
  )
}

export function Forwards() {
  const playlistState = useAppSelector(selectPlaylistState)
  const dispatch = useAppDispatch()
  const context = React.useContext(PlayerContext)

  const handleClick = () => {
    dispatch(setPlayingIndex(playlistState.playingIndex + 1))
  }

  return (
    <button 
      className={styles.controlsButton} 
      onClick={handleClick} 
      disabled={
        !playlistState.playlistVideosLinks.length
        || playlistState.playingIndex === playlistState.playlistVideosLinks.length-1
      }
    >
      <ForwardsIcon />
    </button>
  )
}