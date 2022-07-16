import React from 'react'
import styles from './styles.module.scss'

interface ListProps {
  /**
   * Must be ListLitem
   */
  children: React.ReactNode
}

export default function List(props: ListProps) {
  return (
    <div className={styles.list}>
      {props.children}
    </div>
  )
}

interface ListItemProps {
  title: string
  icon?: React.ReactNode
  onClick: () => void
}

export function ListItem(props: ListItemProps) {
  return (
    <div className={styles.item} onClick={props.onClick}>
      <span className={styles.icon}>{props.icon}</span>
      <span className={styles.text}>{props.title}</span>
    </div>
  )
}