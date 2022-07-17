import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface PlaybackState {
  state: 'loading' | 'playing' | 'paused'
  loop: boolean
  speed: number
}

const initialState: PlaybackState = {
  state: 'loading',
  loop: false,
  speed: 1
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
  },
})

export const { setPlaybackState, setIsLooped, setSpeed } = playbackSlice.actions

export const selectPlayback = (state: RootState) => state.playback
export const selectPlaybackState = (state: RootState) => state.playback.state
export const selectPlaybackIsLooped = (state: RootState) => state.playback.loop
export const selectPlaybackPlayerSpeed = (state: RootState) => state.playback.speed

export default playbackSlice.reducer