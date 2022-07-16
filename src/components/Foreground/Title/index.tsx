import React from 'react'
import styles from './styles.module.scss'
import { PlayerProps } from '/components/player'

interface TitleProps extends PlayerProps {
  title: string
}

export default function Title(props: TitleProps) {
  const shown = false
  return (
    <div className={styles.title} style={{ display: shown ? undefined : 'none' }}>
      {props.title}
    </div>
  )
}