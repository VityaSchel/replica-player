import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface SubtitlesState {
  enabled: boolean
  selectedSubtitlesFileID: string | null
  subtitles: {
    fileID: string | null
    name: string | null
  }[]
}

const initialState: SubtitlesState = {
  enabled: false,
  selectedSubtitlesFileID: null,
  subtitles: []
}

export const subtitlesSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    setSubtitlesEnabled: (state, action: PayloadAction<SubtitlesState['enabled']>) => {
      state.enabled = action.payload
    },
    setSubtitlesFileID: (state, action: PayloadAction<SubtitlesState['selectedSubtitlesFileID']>) => {
      state.selectedSubtitlesFileID = action.payload
    },
    setSubtitlesList: (state, action: PayloadAction<SubtitlesState['subtitles']>) => {
      state.subtitles = action.payload
    },
  }
})

export const { setSubtitlesEnabled, setSubtitlesFileID, setSubtitlesList } = subtitlesSlice.actions

export const selectSubtitles = (state: RootState) => state.subtitles
export const selectSelectedSubtitles = (state: RootState) => state.subtitles.subtitles.find(({ fileID }) => fileID === state.subtitles.selectedSubtitlesFileID)
export const selectSubtitlesEnabled = (state: RootState) => state.subtitles.enabled
export const selectSubtitlesFileID = (state: RootState) => state.subtitles.selectedSubtitlesFileID
export const selectSubtitlesList = (state: RootState) => state.subtitles.subtitles

export default subtitlesSlice.reducer