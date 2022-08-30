import styles from './styles.module.scss'
import cx from 'classnames'

interface MenuItemProps {
  icon?: React.ReactNode
  onClick?: () => void
  children: React.ReactNode
  endAdornment?: React.ReactNode
  buttonProps?: object
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <button className={styles.menuItem} {...props.buttonProps} onClick={props.onClick}>
      <span className={styles.icon}>{props.icon}</span>
      <span className={styles.children}>{props.children}</span>
      <span className={cx(styles.endAdornment, styles.rightArrow)}>{props.endAdornment}</span>
    </button>
  )
}