import React from 'react';
import { PlayerProps } from '/components/player';
interface SeekContext {
    /** Selection position in % */
    selectionPosition: number;
}
export declare const SeekContext: React.Context<SeekContext>;
export default function SeekBar(props: PlayerProps): JSX.Element;
export {};
