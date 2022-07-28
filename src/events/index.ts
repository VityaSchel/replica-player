import type React from 'react'
export { store } from '/store'

export type mEvent = React.SyntheticEvent<HTMLVideoElement, Event>

/**
 * In case there is an event that React doesn't support, fallback to this method which adds events imperatively
 * @param ref React ref's current
 * @param events Object with events and callbacks
 * @returns Cleanup function
 */
export function applyEvents(ref: React.RefObject<Element>['current'], events: { [key: string]: (event?: Event) => void }) {
  if (!ref) return

  for(const [eventName, callback] of Object.entries(events)) {
    ref.addEventListener(eventName, callback)
  }

  return () => {
    for (const [eventName, callback] of Object.entries(events)) {
      ref.removeEventListener(eventName, callback)
    }
  }
}