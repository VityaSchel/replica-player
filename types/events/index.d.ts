import type React from 'react';
export { store } from '/store';
export declare type mEvent = React.SyntheticEvent<HTMLVideoElement, Event>;
/**
 * In case there is an event that React doesn't support, fallback to this method which adds events imperatively
 * @param ref React ref's current
 * @param events Object with events and callbacks
 * @returns Cleanup function
 */
export declare function applyEvents(ref: React.RefObject<Element>['current'], events: {
    [key: string]: (event?: Event) => void;
}): (() => void) | undefined;
