import { store } from '/store'
import { setMuted, setVolume } from '/store/slices/playback'

type Event = React.SyntheticEvent<HTMLVideoElement, Event>

export function onVolumeChange(event: Event) {
  const player = event.currentTarget
  store.dispatch(setMuted(player.muted))
  store.dispatch(setVolume(player.volume))
}

export function _onLoopPropertyChange(event: Event) {
  console.log('onBlur', event)
}