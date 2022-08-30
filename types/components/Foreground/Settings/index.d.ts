import React from 'react';
export declare type SettingsTab = 'main' | 'quality' | 'speed' | 'other_speed' | 'subtitles';
interface SettingsContextValue {
    tab: SettingsTab;
    setTab: (newTab: SettingsTab) => void;
}
export declare const SettingsContext: React.Context<SettingsContextValue>;
export default function Settings(): JSX.Element;
export {};
