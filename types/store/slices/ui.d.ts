import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export interface uiState {
    settingsMenuVisible: boolean;
    fullscreenMode: boolean;
}
export declare const uiSlice: import("@reduxjs/toolkit").Slice<uiState, {
    setSettingsMenuVisible: (state: import("immer/dist/internal").WritableDraft<uiState>, action: PayloadAction<uiState['settingsMenuVisible']>) => void;
    setFullscreenMode: (state: import("immer/dist/internal").WritableDraft<uiState>, action: PayloadAction<uiState['fullscreenMode']>) => void;
}, "ui">;
export declare const setSettingsMenuVisible: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setFullscreenMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const selectUI: (state: RootState) => uiState;
export declare const selectSettingsMenuVisible: (state: RootState) => boolean;
export declare const selectFullscreenMode: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<uiState, import("redux").AnyAction>;
export default _default;
