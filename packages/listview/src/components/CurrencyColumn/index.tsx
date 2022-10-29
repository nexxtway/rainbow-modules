import React from 'react';
import PropTypes from 'prop-types';
import useLocale from 'react-rainbow-components/libs/hooks/useLocale';
import formatCurrency from './helpers/formatCurrency';
import { StyledCellContainer } from './styled';
import { CurrencyColumnProps } from './types';

const CurrencyColumn: React.FC<CurrencyColumnProps> = (props: CurrencyColumnProps) => {
    const { value, locale: localeProp, className, style, ...rest } = props;
    const locale = useLocale(localeProp);
    const content = formatCurrency(value ?? 0, locale, rest);

    return (
        <StyledCellContainer className={className} style={style}>
            <span title={content}>{content}</span>
        </StyledCellContainer>
    );
};

CurrencyColumn.propTypes = {
    /** A number that comes from the data and is displayed in the table cell  */
    value: PropTypes.number,
    /** The CurrencyColumn locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** The currency to use in currency formatting. Possible values are the ISO 4217 currency codes. The default is "USD" */
    currency: PropTypes.string,
    /** How to display the currency in currency formatting. The default is "symbol". */
    currencyDisplay: PropTypes.oneOf(['symbol', 'narrowSymbol', 'code', 'name']),
    /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.
     * You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard". */
    currencySign: PropTypes.oneOf(['standard', 'accounting']),
    /** The minimum number of integer digits to use.
     * A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified
     *  length) when formatted. Possible values are from 1 to 21; The default is 1. */
    minimumIntegerDigits: PropTypes.number,
    /** The minimum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list
     *  (2 if the list doesn't provide that information). */
    minimumFractionDigits: PropTypes.number,
    /** The maximum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for currency formatting is the larger of minimumFractionDigits and
     *  the number of minor unit digits provided by the ISO 4217 currency code list
     *  (2 if the list doesn't provide that information); */
    maximumFractionDigits: PropTypes.number,
    /** The minimum number of significant digits to use. Possible values are from 1 to 21; The default is 1. */
    minimumSignificantDigits: PropTypes.number,
    /** The maximum number of significant digits to use. Possible values are from 1 to 21; The default is 21. */
    maximumSignificantDigits: PropTypes.number,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

CurrencyColumn.defaultProps = {
    value: undefined,
    locale: undefined,
    currency: 'USD',
    currencyDisplay: undefined,
    currencySign: undefined,
    minimumIntegerDigits: undefined,
    minimumFractionDigits: undefined,
    maximumFractionDigits: undefined,
    minimumSignificantDigits: undefined,
    maximumSignificantDigits: undefined,
    className: undefined,
    style: undefined,
};

export default CurrencyColumn;
