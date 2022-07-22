import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface PlaysourceState {
  duration: number | null
}

const initialState: PlaysourceState = {
  duration: null
}

export const playsourceSlice = createSlice({
  name: 'playsource',
  initialState,
  reducers: {
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
  },
})

export const { setDuration } = playsourceSlice.actions

export const selectPlaysource = (state: RootState) => state.playsource
export const selectPlaysourceVideoDuration = (state: RootState) => state.playsource.duration

export default playsourceSlice.reducer