import React from 'react'
import { PlayerProps, Segment } from '/types/props'
import styles from './styles.module.scss'
import { useAppSelector } from '/store/hooks'
import { selectPlaysourceVideoDuration } from '/store/slices/playsource'

type NumberMatrix = [number, number][]
type StringMatrix = [string, string][]

export default function ProgressBars(props: PlayerProps) {
  const [clipPath, setClipPath] = React.useState('')
  const playsourceDuration = useAppSelector(selectPlaysourceVideoDuration)

  React.useEffect(() => {
    if (!props.segments?.length || !playsourceDuration) {
      setClipPath(generateClipPath([['0%', '100%']]))
      return
    }

    const timeSegments = formatSegments(props.segments, playsourceDuration)
    const stringSegments = transformWithGaps(timeSegments, playsourceDuration)
    const result = generateClipPath(stringSegments)

    setClipPath(result)
  }, [setClipPath, props.segments, playsourceDuration])

  /**
   * Converts Segment array to matrix with intervals
   * @param {Segment[]} segments Array of Segment
   * @param {number} duration Duration of track in seconds
   * @returns {NumberMatrix} Matrix with intervals
   */
  const formatSegments = (segments: Segment[], duration: number): NumberMatrix => {
    const timeSegments: NumberMatrix = []
    if (segments[0].timeStart !== 0) {
      const nextSegment = segments[0]
      timeSegments.push(
        [0, nextSegment ? nextSegment.timeStart : duration]
      )
    }

    for (let i = 0; i < segments.length; i++) {
      const nextSegment = segments[i + 1]
      timeSegments.push([segments[i].timeStart, nextSegment ? nextSegment.timeStart : duration])
    }

    return timeSegments
  }
  
  const segmentsGapInPixels = 2
  /**
   * Transforms matrix with segments intervals to matrix with gaps
   * @param {NumberMatrix} segments Matrix with segments intervals (format: [[0, 50], [50, 100]])
   * @param {number} duraton Duration of video
   * @returns {StringMatrix} String matrix with CSS ready properties
   */
  const transformWithGaps = (segments: NumberMatrix, duration: number): StringMatrix => {
    return segments.map(segment => (
      [
        `calc(${segment[0] / duration * 100}% + ${segmentsGapInPixels / 2}px)`,
        `calc(${segment[1] / duration * 100}% - ${segmentsGapInPixels / 2}px)`,
      ]
    ))
  }

  /**
   * Converts array of points with percentages to actual CSS clip path
   * @param {StringMatrix} pointsPercentages Must be this format: [['0%', 'calc(45% - 1px)'], ['calc(55% + 1px)', '100%']]
   * @returns polygon(0% 45%...)
   */
  const generateClipPath = (pointsPercentages: StringMatrix): string => {
    const path = []
    for (const point of pointsPercentages) {
      path.push([point[0], '100%'])
      path.push([point[0], '0%'])
      path.push([point[1], '0%'])
      path.push([point[1], '100%'])
    }

    return `polygon(${
      path.map(
        (points) => points.join(' ')
      ).join(', ')
    })`
  }

  return (
    <div 
      className={styles.progressBar} 
      style={{ clipPath }}
    >
      <div className={styles.selection} />
    </div>
  )
}