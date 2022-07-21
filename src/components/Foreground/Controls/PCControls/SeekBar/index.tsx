import React from 'react'
import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'
import Segments from './Segments'
import ProgressBars from './ProgressBars'
import cx from 'classnames'

export default function SeekBar(props: PlayerProps) {
  const [hover, setHover] = React.useState(false)

  return (
    <div 
      className={cx(styles.seekBarContainer, { [styles.hover]: hover })}
      // onMouseEnter={() => setHover(true)}
      // onMouseOut={() => setHover(false)}
    >
      <Segments {...props} />
      <ProgressBars {...props} />
    </div>
  )
}
