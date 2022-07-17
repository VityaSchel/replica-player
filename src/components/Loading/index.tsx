import React from 'react'
import styles from './styles.module.scss'
import Spinner from './Spinner'
import Warning from './Warning'
import { PlayerProps } from '/components/player'

export default function Loading(props: PlayerProps) {
  // use context, decide when to show loading
  const [spinnerVisible, setSpinnerVisible] = React.useState(false)
  const [warningVisible, setWarningVisible] = React.useState(false)

  React.useEffect(() => {
    if(spinnerVisible) {
      const timeout = setTimeout(() => setWarningVisible(true), 3 * 1000)
      return () => clearTimeout(timeout)
    } else {
      setWarningVisible(false)
    }
  }, [spinnerVisible])

  return (
    <div className={styles.loading}>
      {spinnerVisible && <Spinner />}
      {warningVisible && <Warning />}
    </div>
  )
}