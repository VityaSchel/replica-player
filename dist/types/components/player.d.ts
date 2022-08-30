import * as React from 'react';
import type { PlayerProps } from '/types/props';
export { PlayerProps };
export declare const PlayerContext: React.Context<HTMLVideoElement | undefined>;
export declare const PlayerComponentContext: React.Context<HTMLDivElement | null>;
export default function Player(props: PlayerProps): JSX.Element;
