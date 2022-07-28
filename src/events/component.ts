import { store, mEvent } from './index'
import { setFullscreenMode } from '/store/slices/ui'

export function fullscreenchange() {
  // if(document.fullscreenElement === target) TODO: check if fullscreen element is player
  store.dispatch(setFullscreenMode(!!document.fullscreenElement))
}