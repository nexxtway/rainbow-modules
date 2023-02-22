import { ReactNode } from 'react';

type AppSpinnerParams = {
    message?: ReactNode;
};
export function showAppSpinner(params?: AppSpinnerParams): void;
export function hideAppSpinner(): void;

type AppMessagepParams = {
    message: string;
    variant?: 'success' | 'warning' | 'error';
    timeout?: number;
    onHideMessage?: () => void;
};
export function showAppMessage(params: AppMessagepParams): void;

export function hideAppMessage(): void;

type AppNotificationParams = {
    title: string;
    description: string;
    icon: string;
    timeout: number;
};
export function showAppNotification(notification: AppNotificationParams): void;

export function updateAppActions(actions: Record<string, () => void>): void;

type ConfirmModalParams = {
    icon?: ReactNode;
    variant?:
        | 'base'
        | 'neutral'
        | 'brand'
        | 'outline-brand'
        | 'destructive'
        | 'success'
        | 'inverse'
        | 'border-inverse';
    header?: ReactNode;
    question?: ReactNode;
    okButtonLabel?: ReactNode;
    cancelButtonLabel?: ReactNode;
    borderRadius?: 'rounded' | 'semi-rounded' | 'semi-square' | 'square';
};
export function confirmModal(params: ConfirmModalParams): Promise<boolean>;
