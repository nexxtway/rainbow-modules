interface Options {
    currency?: string;
    currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    currencySign?: 'standard' | 'accounting';
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
}

const formatCurrency = (value: number, locale: string, options: Options): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        ...options,
    }).format(value);
};

export default formatCurrency;
