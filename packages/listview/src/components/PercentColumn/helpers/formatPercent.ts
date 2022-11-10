interface Options {
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
}

const formatPercent = (value: number, locale: string, options: Options): string => {
    return new Intl.NumberFormat(locale, {
        style: 'percent',
        ...options,
    }).format(value);
};

export default formatPercent;
