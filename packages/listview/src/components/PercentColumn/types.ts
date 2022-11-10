import { CSSProperties } from 'react';

export interface PercentColumnProps {
    value?: number;
    locale?: string;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    className?: string;
    style?: CSSProperties;
    cellAlignment?: 'left' | 'right' | 'center';
}
