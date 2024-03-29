import { configureStore } from '@reduxjs/toolkit'
import playbackReducer from './slices/playback'
import playlistReducer from './slices/playlist'
import playsourceReducer from './slices/playsource'
import subtitlesReducer from './slices/subtitles'
import uiReducer from './slices/ui'

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    playlist: playlistReducer,
    playsource: playsourceReducer,
    subtitles: subtitlesReducer,
    ui: uiReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch