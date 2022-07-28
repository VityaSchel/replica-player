import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import FullscreenIcon from '../icons/Fullscreen'
import { selectFullscreenMode } from '/store/slices/ui'
import { PlayerComponentContext } from '/components/player'

export default function Fullscreen() {
  const fullscreenMode = useAppSelector(selectFullscreenMode)
  const playerComponentContext = React.useContext(PlayerComponentContext)
  const [fullscreenAvailable, setFullscreenAvailable] = React.useState<boolean>(false)

  const handleClick = () => {
    if (!document.fullscreenElement) {
      if (playerComponentContext) {
        playerComponentContext.requestFullscreen({ navigationUI: 'hide' })
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  React.useEffect(() => {
    setFullscreenAvailable(window.document.fullscreenEnabled)
  }, [])

  return (
    <button
      className={styles.controlsButton}
      onClick={handleClick}
      disabled={!fullscreenAvailable}
    >
      <FullscreenIcon collapse={fullscreenMode} />
    </button>
  )
}