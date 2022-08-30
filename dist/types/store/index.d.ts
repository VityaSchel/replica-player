export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    playback: import("./slices/playback").PlaybackState;
    playlist: import("./slices/playlist").PlaylistState;
    playsource: import("./slices/playsource").PlaysourceState;
    subtitles: import("./slices/subtitles").SubtitlesState;
    ui: import("./slices/ui").uiState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    playback: import("./slices/playback").PlaybackState;
    playlist: import("./slices/playlist").PlaylistState;
    playsource: import("./slices/playsource").PlaysourceState;
    subtitles: import("./slices/subtitles").SubtitlesState;
    ui: import("./slices/ui").uiState;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
