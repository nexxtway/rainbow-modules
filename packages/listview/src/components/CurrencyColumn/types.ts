import { CSSProperties } from 'react';

export interface CurrencyColumnProps {
    value?: number;
    locale?: string;
    currency?: string;
    currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    currencySign?: 'standard' | 'accounting';
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    className?: string;
    style?: CSSProperties;
    cellAlignment?: 'left' | 'right' | 'center';
}
