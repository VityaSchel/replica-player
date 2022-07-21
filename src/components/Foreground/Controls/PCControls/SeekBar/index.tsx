import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'
import Segments from './Segments'
import ProgressBars from './ProgressBars'

export default function SeekBar(props: PlayerProps) {
  

  return (
    <div className={styles.seekBarContainer}>
      <Segments {...props} />
      <ProgressBars {...props} />
    </div>
  )
}
