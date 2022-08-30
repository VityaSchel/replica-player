import { store, mEvent } from './index'
import { setMuted, setPlaybackState, setVolume, setCurrentTime, setSpeed } from '/store/slices/playback'
import { setDuration } from '/store/slices/playsource'

export function onVolumeChange(event: mEvent) {
  const player = event.currentTarget
  store.dispatch(setMuted(player.muted))
  store.dispatch(setVolume(player.volume))
}

export function onPlay() {
  store.dispatch(setPlaybackState('playing'))
}

export function onPause() {
  store.dispatch(setPlaybackState('paused'))
}

export function onDurationChange(event: mEvent) {
  const player = event.currentTarget
  store.dispatch(setDuration(player.duration))
}

export function onTimeUpdate(event: mEvent) {
  const player = event.currentTarget
  store.dispatch(setCurrentTime(player.currentTime))
}

export function onRateChange(event: mEvent) {
  const player = event.currentTarget
  store.dispatch(setSpeed(player.playbackRate))
}