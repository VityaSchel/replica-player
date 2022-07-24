import ReplicaPlayer from 'replica-player'
import 'replica-player/dist/index.css'

export default function PlayersComparison() {
  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/jNQXAC9IVRw" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <ReplicaPlayer
        width={560}
        height={315}
        src='./me-at-the-zoo.mp4'
      />
    </div>
  )
}