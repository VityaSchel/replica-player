import Info from './Info'
import PlayersComparison from './Players'
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <Info />
      <PlayersComparison />
    </div>
  )
}