import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export interface PlaylistState {
    playlistVideosLinks: string[];
    playingIndex: number;
    autoplay: boolean;
}
export declare const playlistSlice: import("@reduxjs/toolkit").Slice<PlaylistState, {
    setVideosPlaylist: (state: import("immer/dist/internal").WritableDraft<PlaylistState>, action: PayloadAction<PlaylistState['playlistVideosLinks']>) => void;
    setPlayingIndex: (state: import("immer/dist/internal").WritableDraft<PlaylistState>, action: PayloadAction<PlaylistState['playingIndex']>) => void;
    setAutoplay: (state: import("immer/dist/internal").WritableDraft<PlaylistState>, action: PayloadAction<PlaylistState['autoplay']>) => void;
}, "playlist">;
export declare const setVideosPlaylist: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], string>, setPlayingIndex: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>, setAutoplay: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const selectPlaylistState: (state: RootState) => PlaylistState;
export declare const selectPlaylistVideosLinks: (state: RootState) => string[];
export declare const selectPlayingIndex: (state: RootState) => number;
export declare const selectAutoplay: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<PlaylistState, import("redux").AnyAction>;
export default _default;
