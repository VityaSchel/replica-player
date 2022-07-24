import * as React from 'react'
import styles from '../styles.module.scss'
import NoStylesWarning from './NoStylesWarning'
import VideoPlayer from './VideoPlayer'
import Title from './Foreground/Title'
import Controls from './Foreground/Controls'
import * as Yup from 'yup'
import Loading from './Loading'
import ContextMenu, { ContextMenuRefMethods } from './ContextMenu'
import { Provider as ReduxProvider } from 'react-redux'
import NoSsr from '@mui/base/NoSsr'
import { store } from '/store'
import type { PlayerProps } from '/types/props'
export { PlayerProps }

const propsSchema = {
  src: Yup.string()
    .required(),
  width: Yup.number(),
  height: Yup.number(),
  resizeMode: Yup.string()
    .oneOf(['fit', 'cover', 'fill']),
  segments: Yup.array()
    .of(
      Yup.object()
        .shape({
          timeStart: Yup.number()
            .integer()
            .min(0)
            .required(),
          title: Yup.string()
            .required()
        })
    ),
  componentsProps: Yup.object()
    .shape({
      container: Yup.object(),
      controls: Yup.object(),
    })
} as const

export const PlayerContext = React.createContext<undefined | HTMLVideoElement>(undefined)

export default function Player(props: PlayerProps) {
  const contextMenuRef = React.useRef<ContextMenuRefMethods>()
  const playerRef = React.useRef<HTMLVideoElement>(null)
  const [playerComponent, setPlayerComponent] = React.useState<HTMLVideoElement>()

  React.useEffect(() => {
    Yup.object(propsSchema).validateSync(props)
  }, [props])

  React.useEffect(() => {
    if(playerRef?.current) 
      setPlayerComponent(playerRef.current)
  }, [playerRef])

  return (
    <ReduxProvider store={store}>
      <PlayerContext.Provider value={playerComponent}>
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
          <VideoPlayer {...props} ref={playerRef} />
          <div className={styles.foreground}>
            <Title title='Test' {...props} />
            <Controls {...props} />
            <Loading {...props} />
          </div>
          <NoSsr>
            <ContextMenu ref={contextMenuRef} />
          </NoSsr>
        </div>
      </PlayerContext.Provider>
    </ReduxProvider>
  )
}