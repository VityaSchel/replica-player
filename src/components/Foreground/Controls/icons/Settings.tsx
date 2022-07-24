import styles from './styles.module.scss'
import cx from 'classnames'
import SettingsIcon from './settings.svg'

export default function Settings(props: { active?: boolean }) {
  return (
    <SettingsIcon className={cx(styles.settings, { [styles.active]: props.active })} />
  )
}