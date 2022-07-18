import { configureStore } from '@reduxjs/toolkit'
import playbackReducer from './slices/playback'
import playlistReducer from './slices/playlist'

export const store = configureStore({
  reducer: {
    playback: playbackReducer,
    playlist: playlistReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch