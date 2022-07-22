import React from 'react'
import styles from './styles.module.scss'
import { PlayerContext, PlayerProps } from '/components/player'
import Segments from './Segments'
import cx from 'classnames'

interface SeekContext {
  /** Selection position in % */
  selectionPosition: number
}
export const SeekContext = React.createContext<SeekContext>({ selectionPosition: 0 })

export default function SeekBar(props: PlayerProps) {
  const [hover, setHover] = React.useState(false)
  const [selectionPosition, setSelectionPosition] = React.useState<number>(0)
  const seekBarContainerRef = React.useRef<HTMLDivElement>(null)
  const playerContext = React.useContext(PlayerContext)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!seekBarContainerRef.current || !playerContext) return

    const pageX = seekBarContainerRef.current.getBoundingClientRect().left + window.scrollX
    const position = (e.pageX - pageX) / seekBarContainerRef.current.offsetWidth
    setSelectionPosition(position * 100)
  }

  return (
    <SeekContext.Provider value={{ selectionPosition }}>
      <div 
        className={cx(styles.seekBarContainer, { [styles.hover]: hover })}
        onMouseMove={handleMouseMove}
        // onMouseOut={() => setSelectionPosition(0)}
        ref={seekBarContainerRef}
      >
        <Segments {...props} />
      </div>
    </SeekContext.Provider>
  )
}
