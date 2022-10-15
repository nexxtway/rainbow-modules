import { CSSProperties } from 'react';
import { ButtonIconVariant } from 'react-rainbow-components/components/types';

export interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    variant?: ButtonIconVariant;
    shaded?: boolean;
    size?: 'small' | 'medium' | 'large';
    to?: string;
    target?: string;
    disabled?: boolean;
}

export type LinkButtonProps = React.PropsWithChildren<ButtonProps>;
