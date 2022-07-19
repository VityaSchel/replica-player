import { store } from '/store'
import { setMuted, setVolume } from '/store/slices/playback'

// interface EventsHandlers {
//   onVolumeChange: (event: Event) => void
// }

// type Dispatch = ReturnType<typeof useAppDispatch>

// export default function init(dispatch: Dispatch): EventsHandlers {
//   return {
//     onVolumeChange: (event: Event) => onVolumeChange(dispatch, event)
//   }
// }

// export default {
//   on
// }

export function onVolumeChange(event: React.SyntheticEvent<HTMLVideoElement, Event>) {
  const player = event.currentTarget
  store.dispatch(setMuted(player.muted))
  store.dispatch(setVolume(player.volume))
}