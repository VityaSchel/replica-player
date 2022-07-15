import * as React from 'react'
import styles from '../styles.module.scss'
import NoStylesWarning from './NoStylesWarning'
import VideoPlayer from './videoPlayer'
import Controls from './Controls'
import * as Yup from 'yup'
import * as utils from '/utils'

interface PlayerPropsEx extends PlayerProps {
  [key: string]: any
}

export interface PlayerProps {
  src: string
  bob: string
}

const propsSchema = {
  src: Yup.string()
    .url()
    .required()
} as const
export default function Player(props: PlayerPropsEx) {
  // const internalProps = Object.keys(propsSchema) as Array<keyof typeof propsSchema>
  const { restProps, internalProps } = utils.splitProps<PlayerProps>(props, propsSchema)

  return (
    <>
      <NoStylesWarning />
      <div 
        className={styles.replicaPlayer} 
        style={{ display: 'none' }}
      >
        <VideoPlayer {...internalProps} />
        <Controls />
      </div>
    </>
  )
}