import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'
import { CircleIndicatorContext } from '/components/player'
import PlayIcon from './icons/play.svg'
import PauseIcon from './icons/pause.svg'
import VolumeIncreaseIcon from './icons/volumeIncrease.svg'
import VolumeDecreaseIcon from './icons/volumeDecrease.svg'
import VolumeMuteIcon from './icons/volumeMute.svg'
import SpeedIncreaseIcon from './icons/speedIncrease.svg'
import SpeedDecreaseIcon from './icons/speedDecrease.svg'

export type IndicatorType = 'play' | 'pause' | 
  'volumeIncrease' | 'volumeDecrease' | 'volumeMute' |
  'speedIncrease' | 'speedDecrease'

export default function CircleIndicator() {
  const [iconKey, setIconKey] = React.useState(+new Date())
  const [iconType, setIconType] = React.useState<IndicatorType>('play')
  const { setCaller } = React.useContext(CircleIndicatorContext)

  React.useEffect(() => {
    setCaller(() => (type: IndicatorType) => {
      setIconKey(+new Date())
      setIconType(type)
    })
  }, [setCaller, setIconKey, setIconType])

  return (
    <Icon key={iconKey} type={iconType} />
  )
}

function Icon(props: { type: IndicatorType }) {
  const icons: { [key in IndicatorType]: React.ReactNode } = {
    play: <PlayIcon />,
    pause: <PauseIcon />,
    volumeIncrease: <VolumeIncreaseIcon />,
    volumeDecrease: <VolumeDecreaseIcon />,
    volumeMute: <VolumeMuteIcon />,
    speedIncrease: <SpeedIncreaseIcon />,
    speedDecrease: <SpeedDecreaseIcon />,
  }
  return (
    <div className={cx(styles.indicator, { [styles.visible]: true })}>
      <div className={styles.icon}>
        {icons[props.type]}
      </div>
    </div>
  )
}