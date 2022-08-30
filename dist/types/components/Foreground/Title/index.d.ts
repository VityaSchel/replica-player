import { PlayerProps } from '/components/player';
interface TitleProps extends PlayerProps {
    title: string;
}
export default function Title(props: TitleProps): JSX.Element;
export {};
