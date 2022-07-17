import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'
import PlayPause from './PlayPause'

export default function PCControls(props: PlayerProps) {
  return (
    <>
      <div className={styles.background} />
      <div
        className={styles.controlsContainer}
        {...props.componentsProps?.controls}
      >
        <div className={styles.controls}>
          <PlayPause />
        </div>
      </div>
    </>
  )
}