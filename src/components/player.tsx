import * as React from 'react'
import styles from '../styles.module.scss'
import NoStylesWarning from './NoStylesWarning'
import VideoPlayer from './videoPlayer'
import Title from './Foreground/Title'
import Controls from './Foreground/Controls'
import * as Yup from 'yup'
// import * as utils from '/utils'

export interface PlayerProps {
  src: string
  width?: number
  height?: number
  componentsProps?: {
    container?: { [key: string]: any }
    controls?: { [key: string]: any }
  }
}

const propsSchema = {
  src: Yup.string()
    .url()
    .required()
} as const

export default function Player(props: PlayerProps) {
  React.useEffect(() => {
    Yup.object(propsSchema).validateSync(props)
  }, [props])

  return (
    <>
      <NoStylesWarning />
      <div 
        className={styles.replicaPlayer} 
        style={{ 
          display: 'none', // NoStylesWarning

          width: props.width, height: props.height
        }}
        {...props.componentsProps?.container}
      >
        <VideoPlayer {...props} />
        <div className={styles.foreground}>
          <Title {...props} />
          <Controls {...props} />
        </div>
      </div>
    </>
  )
}