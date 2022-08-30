/// <reference types="react" />
interface MenuTitle {
    title: string;
    onClick: () => void;
    endAdornment?: React.ReactNode;
}
export default function MenuTitle(props: MenuTitle): JSX.Element;
export {};
