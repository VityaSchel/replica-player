import styles from './styles.module.scss'

interface MenuTitle {
  title: string
}

export default function MenuTitle(props: MenuTitle) {
  return (
    <div className={styles.title}>
      <span className={styles.backButton} />
      <span>{props.title}</span>
    </div>
  )
}