import React from 'react'
import styles from './styles.module.scss'
import { PlayerContext, PlayerProps } from '/components/player'
import { useAppSelector } from '/store/hooks'
import { selectPlaysourceVideoDuration } from '/store/slices/playsource'

export default function Segments(props: PlayerProps) {
  const player = React.useContext(PlayerContext)
  const [segments, setSegments] = React.useState<{ width: number }[]>([])
  const playsourceDuration = useAppSelector(selectPlaysourceVideoDuration)

  React.useEffect(() => {
    if (!props.segments?.length || !playsourceDuration) {
      setSegments([])
      return
    }

    const timeToPercent = (secondsFromStart: number) => secondsFromStart / playsourceDuration * 100

    const newSegments: { width: number }[] = []
    if (props.segments[0].timeStart !== 0) {
      const nextSegment = props.segments[0]
      newSegments.push({
        width: nextSegment ? timeToPercent(nextSegment.timeStart) : 100
      })
    }

    for (let i = 0; i < props.segments.length; i++) {
      const nextSegment = props.segments[i + 1]
      const filledSpace = newSegments.reduce((a, b) => a + b.width, 0)
      newSegments.push({
        width: nextSegment
          ? timeToPercent(nextSegment.timeStart) - filledSpace
          : 100 - filledSpace
      })
    }

    setSegments(newSegments)
  }, [setSegments, props.segments, playsourceDuration])

  return (
    <div className={styles.segments}>
      {
        segments.length
          ? segments.map((segment, i) => (
            <Segment
              width={segment.width}
              key={i}
            />
          ))
          : <Segment width={100} />
      }
    </div>
  )
}

function Segment(props: { width: number }) {
  return (
    <div className={styles.segment} style={{ width: `${props.width}%` }}>

    </div>
  )
}