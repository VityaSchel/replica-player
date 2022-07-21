import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'
import PlayPause from './PlayPause'
import { Backwards, Forwards } from './PlaylistButtons'
import Volume from './Volume'
import SeekBar from './SeekBar'

export default function PCControls(props: PlayerProps) {
  return (
    <>
      <div className={styles.background} />
      <div
        className={styles.controlsContainer}
        {...props.componentsProps?.controls}
      >
        <SeekBar {...props} />
        <div className={styles.controls}>
          <div className={styles.left}>
            <Backwards />
            <PlayPause />
            <Forwards />
            <Volume />
          </div>
          <div className={styles.right}>

          </div>
        </div>
      </div>
    </>
  )
}