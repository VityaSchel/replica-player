import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export interface SettingsMenuState {
    visible: boolean;
}
export declare const settingsMenuSlice: import("@reduxjs/toolkit").Slice<SettingsMenuState, {
    setSettingsMenuVisible: (state: import("immer/dist/internal").WritableDraft<SettingsMenuState>, action: PayloadAction<SettingsMenuState['visible']>) => void;
}, "settingsMenu">;
export declare const setSettingsMenuVisible: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const selectSettingsMenu: (state: RootState) => SettingsMenuState;
export declare const selectSettingsMenuVisible: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<SettingsMenuState, import("redux").AnyAction>;
export default _default;
