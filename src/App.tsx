import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <h1>Replica-player</h1>
      <h2>YouTube's player clone for React</h2>
      <p>Also visit this page from mobile!</p>
      <div className="card">
        <a href='https://github.com/VityaSchel/replica-player'>
          <button>
            Get&nbsp;started&nbsp;&nbsp;&rarr;
          </button>
        </a>
      </div>
      <p className={styles.footer}>
        MIT License
      </p>
    </div>
  )
}

export default App
