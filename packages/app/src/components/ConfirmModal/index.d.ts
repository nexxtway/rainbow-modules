import { ReactNode } from 'react';

export interface ConfirmModalProps {
    /** @ignore */
    isOpen?: boolean;
    /** The header that will be displayed in the modal. */
    header?: string;
    /** The text or question that will be displayed in the modal. */
    question?: string;
    /** The icon that will be displayed in the modal. */
    icon?: ReactNode;
    /** The label for OK button. */
    okButtonLabel?: string;
    /** The label for Cancel button. */
    cancelButtonLabel?: string;
    /** The modal variant. */
    variant?: 'brand' | 'success' | 'warning' | 'destructive';
    /** The border radius of the modal. */
    borderRadius?: 'rounded' | 'semi-rounded' | 'semi-square' | 'square';
    /** @ignore */
    onCancel?: () => void;
    /** @ignore */
    onConfirm?: (event: MouseEvent<HTMLElement>) => void;
    children?: ReactNode;
}

export default function (props: ConfirmModalProps): JSX.Element | null;
