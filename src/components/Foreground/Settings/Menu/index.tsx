import styles from './styles.module.scss'

export default function Menu(props: { children: React.ReactNode[] | React.ReactNode }) {
  return (
    <div className={styles.menu}>
      {props.children}
    </div>
  )
}