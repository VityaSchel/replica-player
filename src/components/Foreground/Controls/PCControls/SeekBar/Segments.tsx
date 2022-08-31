import React from 'react'
import styles from './styles.module.scss'
import { SeekContext } from '/components/Foreground/Controls/PCControls/SeekBar'
import { PlayerContext, PlayerProps } from '/components/player'
import { useAppSelector } from '/store/hooks'
import { selectDuration } from '/store/slices/playsource'
import cx from 'classnames'

type Segments = { width: number, startingPosition: number }[]

export default function Segments(props: PlayerProps) {
  const player = React.useContext(PlayerContext)
  const [segments, setSegments] = React.useState<Segments>([])
  const playsourceDuration = useAppSelector(selectDuration)

  React.useEffect(() => {
    if (!props.segments?.length || !playsourceDuration) {
      setSegments([])
      return
    }

    const timeToPercent = (secondsFromStart: number) => secondsFromStart / playsourceDuration * 100

    const newSegments: Segments = []
    if (props.segments[0].timeStart !== 0) {
      const nextSegment = props.segments[0]
      newSegments.push({
        width: nextSegment ? timeToPercent(nextSegment.timeStart) : 100,
        startingPosition: 0
      })
    }

    for (let i = 0; i < props.segments.length; i++) {
      const nextSegment = props.segments[i + 1]
      const filledSpace = newSegments.reduce((a, b) => a + b.width, 0)
      newSegments.push({
        width: nextSegment
          ? timeToPercent(nextSegment.timeStart) - filledSpace
          : 100 - filledSpace,
        startingPosition: timeToPercent(props.segments[i].timeStart)
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
              startingPosition={segment.startingPosition}
              key={i}
            />
          ))
          : <Segment
            width={100}
            startingPosition={0}
          />
      }
    </div>
  )
}

interface SegmentProps {
  width: number
  /** Segment starting position in % */
  startingPosition: number
}
function Segment(props: SegmentProps) {
  const seekContext = React.useContext(SeekContext)

  const endingPosition = props.startingPosition + props.width
  const bar = (position: number): string => {
    if (position > endingPosition) return '100%'
    else {
      const relativePos = position - props.startingPosition
      const relativeWidth = relativePos / props.width * 100
      return `${Math.max(Math.min(100, relativeWidth), 0)}%`
    }
  }

  return (
    <div className={styles.segment} style={{ width: `${props.width}%` }}>
      <div 
        className={cx(styles.progressBar, styles.selection)} 
        style={{ width: bar(seekContext.selectionPosition) }} 
      />
    </div>
  )
}