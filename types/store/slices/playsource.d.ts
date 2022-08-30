import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '/store';
export declare type VideoQuality = '144p' | '240p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '4320p' | {
    width: number;
    height: number;
    fps: number;
};
export declare const VideoQualities: string[];
export interface PlaysourceState {
    sourceURI: string;
    duration: number | null;
    quality: VideoQuality | null;
}
export declare const playsourceSlice: import("@reduxjs/toolkit").Slice<PlaysourceState, {
    setSourceURI: (state: import("immer/dist/internal").WritableDraft<PlaysourceState>, action: PayloadAction<PlaysourceState['sourceURI']>) => void;
    setDuration: (state: import("immer/dist/internal").WritableDraft<PlaysourceState>, action: PayloadAction<number>) => void;
    setQuality: (state: import("immer/dist/internal").WritableDraft<PlaysourceState>, action: PayloadAction<PlaysourceState['quality']>) => void;
}, "playsource">;
export declare const setSourceURI: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setDuration: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>, setQuality: import("@reduxjs/toolkit").ActionCreatorWithPayload<VideoQuality | null, string>;
export declare const selectPlaysource: (state: RootState) => PlaysourceState;
export declare const selectPlaysourceSourceURI: (state: RootState) => string;
export declare const selectPlaysourceVideoDuration: (state: RootState) => number | null;
export declare const selectPlaysourceVideoQuality: (state: RootState) => VideoQuality | null;
declare const _default: import("redux").Reducer<PlaysourceState, import("redux").AnyAction>;
export default _default;
