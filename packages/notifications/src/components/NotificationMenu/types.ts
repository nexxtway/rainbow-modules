import { ReactElement, ReactNode, RefObject } from 'react';
import { BadgeProps } from 'react-rainbow-components/components/Badge';

type Status = 'success' | 'error' | 'warning' | 'inProgress' | ReactNode;

export interface ButtonIconHandle {
    htmlElementRef: RefObject<HTMLButtonElement>;
    focus: () => void;
    blur: () => void;
    click: () => void;
}

export interface StatusBadgeProps extends BadgeProps {
    status?: Status;
}

export interface Notification {
    id?: string;
    title?: string;
    description?: string;
    status?: Status;
    createdAt?: string;
    icon?: ReactNode | string;
    unread?: boolean;
}

export interface NotificationProps extends Notification {
    onClick?: (notification: Notification) => void;
    isLoading?: boolean;
}

export interface NotificationsProps {
    notifications?: Array<NotificationProps>;
    onClick?: (notification: Notification) => void;
    isLoading?: boolean;
}

export interface DropdownProps {
    label?: ReactNode;
    footer?: ReactNode;
    notifications?: Array<NotificationProps>;
    unreads?: number | boolean;
    isLoading?: boolean;
    onClick?: (notification: Notification) => void;
}

export interface NotificationMenuProps {
    label?: ReactNode;
    footer?: ReactNode;
    isLoading?: boolean;
    unreads?: number | boolean;
    notifications?: Array<NotificationProps>;
    onClick?: () => void;
}

export interface IconProps {
    icon?: string | ReactElement;
}

export interface Position {
    top: number;
    left: number;
}
