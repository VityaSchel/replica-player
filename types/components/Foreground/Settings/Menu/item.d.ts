/// <reference types="react" />
interface MenuItemProps {
    icon?: React.ReactNode;
    onClick?: () => void;
    children: React.ReactNode;
    endAdornment?: React.ReactNode;
    buttonProps?: object;
}
export default function MenuItem(props: MenuItemProps): JSX.Element;
export {};
