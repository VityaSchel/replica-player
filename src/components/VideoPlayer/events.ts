import { store } from '/store'
import { setMuted, setPlaybackState, setVolume } from '/store/slices/playback'

type SEvent = React.SyntheticEvent<HTMLVideoElement, Event>

export function onVolumeChange(event: SEvent) {
  const player = event.currentTarget
  store.dispatch(setMuted(player.muted))
  store.dispatch(setVolume(player.volume))
}

export function onPlay(event: SEvent) {
  store.dispatch(setPlaybackState('playing'))
}

export function onPause(event: SEvent) {
  store.dispatch(setPlaybackState('paused'))
}