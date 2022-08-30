import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface SubtitlesState {
  enabled: boolean
  fileID: string | null
  name: string | null
}

const initialState: SubtitlesState = {
  enabled: false,
  fileID: null,
  name: null
}

export const subtitlesSlice = createSlice({
  name: 'subtitles',
  initialState,
  reducers: {
    setSubtitlesEnabled: (state, action: PayloadAction<SubtitlesState['enabled']>) => {
      state.enabled = action.payload
    },
    setSubtitlesFileID: (state, action: PayloadAction<SubtitlesState['fileID']>) => {
      state.fileID = action.payload
    },
    setSubtitlesName: (state, action: PayloadAction<SubtitlesState['name']>) => {
      state.name = action.payload
    },
  }
})

export const { setSubtitlesEnabled, setSubtitlesFileID, setSubtitlesName } = subtitlesSlice.actions

export const selectSubtitles = (state: RootState) => state.subtitles
export const selectSubtitlesEnabled = (state: RootState) => state.subtitles.enabled
export const selectSubtitlesFileID = (state: RootState) => state.subtitles.fileID
export const selectSubtitlesName = (state: RootState) => state.subtitles.name

export default subtitlesSlice.reducer