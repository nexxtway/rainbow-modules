import { ReactElement, ReactNode, RefObject, CSSProperties } from 'react';
import { BadgeProps } from 'react-rainbow-components/components/Badge';
import firebase from 'firebase';

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
    createdAt?: number | Date | firebase.firestore.Timestamp;
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
    className?: string;
    style?: CSSProperties;
}

export interface IconProps {
    icon?: string | ReactElement;
}

export interface Position {
    top: number;
    left: Unit;
}

export declare type Unit =
    | 'second'
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'quarter'
    | 'year';

export declare type Units =
    | 'seconds'
    | 'minutes'
    | 'hours'
    | 'days'
    | 'weeks'
    | 'months'
    | 'quarters'
    | 'years';

export type FormattableUnit = Unit | Units;
