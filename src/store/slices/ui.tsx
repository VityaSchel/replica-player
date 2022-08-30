import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface uiState {
  settingsMenuVisible: boolean
  fullscreenMode: boolean
}

const initialState: uiState = {
  settingsMenuVisible: false,
  fullscreenMode: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSettingsMenuVisible: (state, action: PayloadAction<uiState['settingsMenuVisible']>) => {
      state.settingsMenuVisible = action.payload
    },
    setFullscreenMode: (state, action: PayloadAction<uiState['fullscreenMode']>) => {
      state.fullscreenMode = action.payload
    },
  }
})

export const { setSettingsMenuVisible, setFullscreenMode } = uiSlice.actions

export const selectUI = (state: RootState) => state.ui
export const selectSettingsMenuVisible = (state: RootState) => state.ui.settingsMenuVisible
export const selectFullscreenMode = (state: RootState) => state.ui.fullscreenMode

export default uiSlice.reducer