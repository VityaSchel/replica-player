export default function VolumeMute(props: {
    volume: number;
    setVolume: (volume: number) => void;
    muted: boolean;
    setMuted: (isMuted: boolean) => void;
}): JSX.Element;
