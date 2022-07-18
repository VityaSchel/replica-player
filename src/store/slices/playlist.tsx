import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '/store'

export interface PlaylistState {
  playlistVideosLinks: string[]
  playingIndex: number
}

const initialState: PlaylistState = {
  playlistVideosLinks: [],
  playingIndex: -1
}

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setVideosPlaylist: (state, action: PayloadAction<PlaylistState['playlistVideosLinks']>) => {
      state.playlistVideosLinks = action.payload
    },
    setPlayingIndex: (state, action: PayloadAction<PlaylistState['playingIndex']>) => {
      state.playingIndex = action.payload
    }
  }
})

export const { setVideosPlaylist, setPlayingIndex } = playlistSlice.actions

export const selectPlaylistState = (state: RootState) => state.playlist
export const selectPlaylistVideosLinks = (state: RootState) => state.playlist.playlistVideosLinks
export const selectPlayingIndex = (state: RootState) => state.playlist.playingIndex

export default playlistSlice.reducer