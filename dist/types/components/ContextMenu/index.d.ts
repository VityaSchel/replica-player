import React from 'react';
export interface ContextMenuRefMethods {
    open: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const ContextMenu: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default ContextMenu;
