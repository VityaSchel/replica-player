import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface SettingsMenuState {
  visible: boolean
}

const initialState: SettingsMenuState = {
  visible: false
}

export const settingsMenuSlice = createSlice({
  name: 'settingsMenu',
  initialState,
  reducers: {
    setSettingsMenuVisible: (state, action: PayloadAction<SettingsMenuState['visible']>) => {
      state.visible = action.payload
    }
  }
})

export const { setSettingsMenuVisible } = settingsMenuSlice.actions

export const selectSettingsMenu = (state: RootState) => state.settingsMenu
export const selectSettingsMenuVisible = (state: RootState) => state.settingsMenu.visible

export default settingsMenuSlice.reducer