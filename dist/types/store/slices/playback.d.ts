import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export interface PlaybackState {
    state: 'loading' | 'playing' | 'paused';
    /** Lazy */
    loop: boolean;
    speed: number;
    volume: number;
    muted: boolean;
    currentTime: number;
}
export declare const playbackSlice: import("@reduxjs/toolkit").Slice<PlaybackState, {
    setPlaybackState: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<PlaybackState['state']>) => void;
    setIsLooped: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<PlaybackState['loop']>) => void;
    setSpeed: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<number>) => void;
    setVolume: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<number>) => void;
    setMuted: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<boolean>) => void;
    setCurrentTime: (state: import("immer/dist/internal").WritableDraft<PlaybackState>, action: PayloadAction<number>) => void;
}, "playback">;
export declare const setPlaybackState: import("@reduxjs/toolkit").ActionCreatorWithPayload<"loading" | "playing" | "paused", string>, setIsLooped: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setSpeed: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>, setVolume: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>, setMuted: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setCurrentTime: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>;
export declare const selectPlayback: (state: RootState) => PlaybackState;
export declare const selectPlaybackState: (state: RootState) => "loading" | "playing" | "paused";
export declare const selectPlaybackIsLooped: (state: RootState) => boolean;
export declare const selectPlaybackPlayerSpeed: (state: RootState) => number;
export declare const selectPlaybackVolume: (state: RootState) => number;
export declare const selectPlaybackIsMuted: (state: RootState) => boolean;
export declare const selectPlaybackTime: (state: RootState) => number;
declare const _default: import("redux").Reducer<PlaybackState, import("redux").AnyAction>;
export default _default;
