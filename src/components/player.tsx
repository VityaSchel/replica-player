import * as React from 'react'
import styles from '../styles.module.scss'
import NoStylesWarning from './NoStylesWarning'
import VideoPlayer from './videoPlayer'
import Title from './Foreground/Title'
import Controls from './Foreground/Controls'
import * as Yup from 'yup'
import Loading from './Loading'
import ContextMenu, { ContextMenuRefMethods } from './ContextMenu'
// import * as utils from '/utils'
import NoSsr from '@mui/base/NoSsr'

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
  const contextMenuRef = React.useRef<ContextMenuRefMethods>()

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
        onContextMenu={event => contextMenuRef.current?.open(event)}
        {...props.componentsProps?.container}
      >
        <VideoPlayer {...props} />
        <div className={styles.foreground}>
          <Title title='Test' {...props} />
          <Controls {...props} />
          <Loading {...props} />
        </div>
        <NoSsr>
          <ContextMenu ref={contextMenuRef} />
        </NoSsr>
      </div>
    </>
  )
}