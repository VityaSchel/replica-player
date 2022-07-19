import styles from './styles.module.scss'
import cx from 'classnames'

export default function PlayPause(props: { playing?: boolean }) {
  return (
    <svg viewBox="0 0 36 36" width="42">
      <path className={cx(styles.playPause, { [styles.play]: props.playing, [styles.pause]: !props.playing })} />
    </svg>
  )
}