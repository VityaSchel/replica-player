import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export type VideoQuality = '144p' | '240p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '4320p' | 'CUSTOM'
export const VideoQualities: VideoQuality[] = ['144p', '240p', '360p', '480p', '720p', '1080p', '1440p', '2160p', '4320p', 'CUSTOM']

export interface PlaysourceState {
  duration: number | null
  quality: VideoQuality | null
}

const initialState: PlaysourceState = {
  duration: null,
  quality: null
}

export const playsourceSlice = createSlice({
  name: 'playsource',
  initialState,
  reducers: {
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setQuality: (state, action: PayloadAction<PlaysourceState['quality']>) => {
      state.quality = action.payload
    },
  },
})

export const { setDuration, setQuality } = playsourceSlice.actions

export const selectPlaysource = (state: RootState) => state.playsource
export const selectPlaysourceVideoDuration = (state: RootState) => state.playsource.duration
export const selectPlaysourceVideoQuality = (state: RootState) => state.playsource.quality

export default playsourceSlice.reducer