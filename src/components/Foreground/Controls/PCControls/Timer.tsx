import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import { selectPlaybackTime } from '/store/slices/playback'
import { formatTimer } from '/utils'
import { selectPlaysourceVideoDuration } from '/store/slices/playsource'

export default function Timer() {
  const currentTime = useAppSelector(selectPlaybackTime)
  const videoDuration = useAppSelector(selectPlaysourceVideoDuration)

  return (
    <div className={styles.timer}>
      <span className={styles.timerValue}>
        <span>{formatTimer(currentTime)}</span>
        <span>/</span>
        <span>{formatTimer(videoDuration ?? 0)}</span>
      </span>
    </div>
  )
}