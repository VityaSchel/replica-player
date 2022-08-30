/// <reference types="react" />
declare type SEvent = React.SyntheticEvent<HTMLVideoElement, Event>;
export declare function onVolumeChange(event: SEvent): void;
export declare function onPlay(event: SEvent): void;
export declare function onPause(event: SEvent): void;
export declare function onDurationChange(event: SEvent): void;
export declare function onTimeUpdate(event: SEvent): void;
export {};
