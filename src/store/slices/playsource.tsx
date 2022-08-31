import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export type VideoQuality = '144p' | '240p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '4320p' | {
  width: number
  height: number
  fps: number
}
export const VideoQualities = ['144p', '240p', '360p', '480p', '720p', '1080p', '1440p', '2160p', '4320p']

export interface PlaysourceState {
  selectedSourceURI: string | null
  sources: {
    sourceURI: string
    quality: VideoQuality
  }[]
  duration: number | null
}

const initialState: PlaysourceState = {
  selectedSourceURI: null,
  sources: [],
  duration: null
}

export const playsourceSlice = createSlice({
  name: 'playsource',
  initialState,
  reducers: {
    setSourceURI: (state, action: PayloadAction<PlaysourceState['selectedSourceURI']>) => {
      state.selectedSourceURI = action.payload
    },
    setSources: (state, action: PayloadAction<PlaysourceState['sources']>) => {
      state.sources = action.payload
    },
    setDuration: (state, action: PayloadAction<PlaysourceState['duration']>) => {
      state.duration = action.payload
    }
  },
})

export const { setSourceURI, setSources, setDuration } = playsourceSlice.actions

export const selectPlaysource = (state: RootState) => state.playsource
export const selectSources = (state: RootState) => state.playsource.sources
export const selectSelectedSource = (state: RootState) => state.playsource.sources.find(({ sourceURI }) => sourceURI === state.playsource.selectedSourceURI)
export const selectDuration = (state: RootState) => state.playsource.duration

export default playsourceSlice.reducer