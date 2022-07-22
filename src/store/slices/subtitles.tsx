import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface SubtitlesState {
  enabled: boolean
  fileID: string | null
}

const initialState: SubtitlesState = {
  enabled: false,
  fileID: null
}

export const subtitlesSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    setSubtitlesEnabled: (state, action: PayloadAction<SubtitlesState['enabled']>) => {
      state.enabled = action.payload
    },
    setSubtitlesFile: (state, action: PayloadAction<SubtitlesState['fileID']>) => {
      state.fileID = action.payload
    },
  }
})

export const { setSubtitlesEnabled } = subtitlesSlice.actions

export const selectSubtitles = (state: RootState) => state.subtitles
export const selectSubtitlesEnabled = (state: RootState) => state.subtitles.enabled
export const selectSubtitlesFileID = (state: RootState) => state.subtitles.fileID

export default subtitlesSlice.reducer