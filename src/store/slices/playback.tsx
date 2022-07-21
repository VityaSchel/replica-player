import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

// Lazy means property may have outdated state
export interface PlaybackState {
  state: 'loading' | 'playing' | 'paused'
  /** Lazy */
  loop: boolean
  speed: number
  volume: number
  muted: boolean
  currentTime: number
}

const initialState: PlaybackState = {
  state: 'loading',
  loop: false,
  speed: 1,
  volume: 1,
  muted: false,
  currentTime: 0
}

export const playbackSlice = createSlice({
  name: 'playback',
  initialState,
  reducers: {
    setPlaybackState: (state, action: PayloadAction<PlaybackState['state']>) => {
      state.state = action.payload
    },
    setIsLooped: (state, action: PayloadAction<PlaybackState['loop']>) => {
      state.loop = action.payload
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.muted = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
  }
})

export const { setPlaybackState, setIsLooped, setSpeed, setVolume, setMuted, setCurrentTime } = playbackSlice.actions

export const selectPlayback = (state: RootState) => state.playback
export const selectPlaybackState = (state: RootState) => state.playback.state
export const selectPlaybackIsLooped = (state: RootState) => state.playback.loop
export const selectPlaybackPlayerSpeed = (state: RootState) => state.playback.speed
export const selectPlaybackVolume = (state: RootState) => state.playback.volume
export const selectPlaybackIsMuted = (state: RootState) => state.playback.muted
export const selectPlaybackTime = (state: RootState) => state.playback.currentTime

export default playbackSlice.reducer