import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export interface SubtitlesState {
    enabled: boolean;
    fileID: string | null;
    name: string | null;
}
export declare const subtitlesSlice: import("@reduxjs/toolkit").Slice<SubtitlesState, {
    setSubtitlesEnabled: (state: import("immer/dist/internal").WritableDraft<SubtitlesState>, action: PayloadAction<SubtitlesState['enabled']>) => void;
    setSubtitlesFileID: (state: import("immer/dist/internal").WritableDraft<SubtitlesState>, action: PayloadAction<SubtitlesState['fileID']>) => void;
    setSubtitlesName: (state: import("immer/dist/internal").WritableDraft<SubtitlesState>, action: PayloadAction<SubtitlesState['name']>) => void;
}, "subtitles">;
export declare const setSubtitlesEnabled: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setSubtitlesFileID: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>, setSubtitlesName: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>;
export declare const selectSubtitles: (state: RootState) => SubtitlesState;
export declare const selectSubtitlesEnabled: (state: RootState) => boolean;
export declare const selectSubtitlesFileID: (state: RootState) => string | null;
export declare const selectSubtitlesName: (state: RootState) => string | null;
declare const _default: import("redux").Reducer<SubtitlesState, import("redux").AnyAction>;
export default _default;
