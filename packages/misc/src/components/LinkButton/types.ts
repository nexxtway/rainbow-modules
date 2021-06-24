import { CSSProperties } from 'react';
import { ButtonIconVariant } from 'react-rainbow-components/components/types';
import { LinkProps } from 'react-router-dom';

export interface ButtonProps {
    className: string;
    style: CSSProperties;
    variant?: ButtonIconVariant;
    shaded?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export type LinkButtonProps = React.PropsWithChildren<ButtonProps & LinkProps>;
