import styles from './styles.module.scss'

interface MenuTitle {
  title: string
  onClick: () => void
  endAdornment?: React.ReactNode
}

export default function MenuTitle(props: MenuTitle) {
  return (
    <div className={styles.title}>
      <button onClick={props.onClick} className={styles.button}>
        <span className={styles.backButton} />
        <span>{props.title}</span>
      </button>
      {props.endAdornment}
    </div>
  )
}