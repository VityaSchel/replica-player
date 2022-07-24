import styles from './App.module.scss'
import copy from 'copy-to-clipboard'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import cx from 'classnames'

function App() {
  const handleClickOnNpm = () => {
    copy('npm i replica-player')
  }

  return (
    <div className={styles.app}>
      <h1>Replica-player</h1>
      <h2>YouTube's player clone for React</h2>
      <p>Also visit this page from mobile!</p>
      <div className={styles.card}>
        <a href='https://github.com/VityaSchel/replica-player'>
          <button className={styles.button}>
            Get&nbsp;started&nbsp;&nbsp;&rarr;
          </button>
        </a>
        <Tippy content='Copied' trigger='click' placement='top-end' arrow={false}>
          <div onClick={handleClickOnNpm} className={cx(styles.button, styles.npm)}>
            npm i replica-player
          </div>
        </Tippy>
      </div>
      <p className={styles.footer}>
        <a href='https://github.com/VityaSchel/replica-player/LICENSE.md'>MIT License</a>
      </p>
    </div>
  )
}

export default App
