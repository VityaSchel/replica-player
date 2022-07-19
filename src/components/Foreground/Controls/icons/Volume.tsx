import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function VolumeMute(props: { 
  volume: number
  setVolume: (volume: number) => void
  muted: boolean
  setMuted: (isMuted: boolean) => void
}) {
  const [volume, setVolume] = [props.volume, props.setVolume]
  const [muted, setMuted] = [props.muted, props.setMuted]
  const [preVolume, setPreVolume] = React.useState<number>(props.volume)
  const [iconState, setIconState] = React.useState('')

  React.useEffect(() => {
    const from2to1 = preVolume >= 0.5 && props.volume < 0.5
    const from1to2 = preVolume < 0.5 && props.volume >= 0.5

    from2to1 && setIconState('from2to1')
    from1to2 && setIconState('from1to2')
    
    setPreVolume(props.volume)
  }, [props.volume])

  React.useEffect(() => {
    if(props.volume === 0) {
      setMuted(true)
      setIconState('from1to2')
      setVolume(1)
    }
  }, [props.volume])

  React.useEffect(() => {
    setMuted(props.muted)
    if(volume < 0.5) {
      if (props.muted) {
        setIconState('from1to2')
      } else {
        setIconState('from2to1')
      }
    }
  }, [props.muted])

  const clipPathStyle = cx(styles.clipPath, { [styles.muted]: muted })

  return (
    <svg height='100%' version='1.1' viewBox='0 0 36 36' width='36'>
      <use className='ytp-svg-shadow' xlinkHref='#ytp-id-14'></use>
      <use className='ytp-svg-shadow' xlinkHref='#ytp-id-15'></use>
      <defs>
        <clipPath id='ytp-svg-volume-animation-mask'>
          <path d='m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z'></path>
          <path d='M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z'></path>
          <path className={clipPathStyle} d='M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z'
            transform='translate(18.462145846603114, 18.462145846603114)'></path>
        </clipPath>
        <clipPath id='ytp-svg-volume-animation-slash-mask'>
          <path className={clipPathStyle} d='m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z'
            transform='translate(18.462145846603114, 18.462145846603114)'></path>
        </clipPath>
      </defs>
      <path 
        className={cx(styles.volume, { 
          [styles.from2to1]: iconState === 'from2to1',
          [styles.from1to2]: iconState === 'from1to2',
          [styles.from1toMute]: iconState === 'from1toMute',
          [styles.fromMuteTo1]: iconState === 'fromMuteTo1',
        })}
        clipPath='url(#ytp-svg-volume-animation-mask)'
        // animation is here
        d='M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z' 
        fill='#fff' id='ytp-id-14'></path>
      <path className='ytp-svg-fill ytp-svg-volume-animation-hider' clipPath='url(#ytp-svg-volume-animation-slash-mask)'
        d='M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z' fill='#fff' id='ytp-id-15'></path>
    </svg>
  )
}