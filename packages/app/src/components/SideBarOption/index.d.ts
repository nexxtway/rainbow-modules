import { CSSProperties, ReactNode } from 'react';

export interface SideBarOptionProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /** The icon displayed in the SidebarItem. It must be a svg icon or a font icon. */
    icon?: ReactNode;
    /** The icon displayed in the SidebarItem when selected. It must be a svg icon or a font icon. */
    selectedIcon?: ReactNode;
    /** A unique identifier for the navigation item. */
    name?: string;
    /** The text to show if it is passed. */
    label?: ReactNode;
    /** The path to navigate to when the item is clicked. */
    path?: string;
    /** When true, will only match if the path matches the location.pathname exactly */
    exact?: boolean;
}

export default function (props: SideBarOptionProps): JSX.Element | null;
