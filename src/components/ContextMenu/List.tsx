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
  onClick?: () => void
  endIcon?: React.ReactNode
  href?: string
}

export function ListItem(props: ListItemProps) {
  const content = (
    <>
      <span className={styles.icon}>{props.icon}</span>
      <span className={styles.text}>{props.title}</span>
      <span className={styles.endIcon}>{props.endIcon}</span>
    </>
  )

  if(props.href) {
    return (
      <a className={styles.item} href={props.href} target='_blank' rel='noreferrer' onClick={props.onClick}>
        {content}
      </a>
    )
  } else {
    return (
      <div className={styles.item} onClick={props.onClick}>
        {content}
      </div>
    )
  }
}