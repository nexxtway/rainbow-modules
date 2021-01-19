import { CSSProperties } from 'react';

export interface SideBarNavigationProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export default function (props: SideBarNavigationProps): JSX.Element | null;
