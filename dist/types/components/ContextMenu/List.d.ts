import React from 'react';
interface ListProps {
    /**
     * Must be ListLitem
     */
    children: React.ReactNode;
}
export default function List(props: ListProps): JSX.Element;
interface ListItemProps {
    title: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    endIcon?: React.ReactNode;
    href?: string;
}
export declare function ListItem(props: ListItemProps): JSX.Element;
export {};
