import React from 'react';
import PropTypes from 'prop-types';
import { useLocale } from 'react-rainbow-components';
import formatPercent from './helpers/formatPercent';
import { StyledCellContainer } from './styled';
import { PercentColumnProps } from './types';

const PercentColumn: React.FC<PercentColumnProps> = (props: PercentColumnProps) => {
    const { value, locale: localeProp, className, style, ...rest } = props;
    const locale = useLocale(localeProp);
    const content = formatPercent(value ?? 0, locale, rest);

    return (
        <StyledCellContainer className={className} style={style} title={content}>
            {content}
        </StyledCellContainer>
    );
};

PercentColumn.propTypes = {
    /** A number that comes from the data and is displayed in the table cell  */
    value: PropTypes.number,
    /** The PercentColumn locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** The minimum number of integer digits to use.
     * A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified
     *  length) when formatted. Possible values are from 1 to 21; The default is 1. */
    minimumIntegerDigits: PropTypes.number,
    /** The minimum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for percent formatting is 0; */
    minimumFractionDigits: PropTypes.number,
    /** The maximum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for percent formatting is the larger of minimumFractionDigits and 0. */
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

PercentColumn.defaultProps = {
    value: undefined,
    locale: undefined,
    minimumIntegerDigits: undefined,
    minimumFractionDigits: undefined,
    maximumFractionDigits: undefined,
    minimumSignificantDigits: undefined,
    maximumSignificantDigits: undefined,
    className: undefined,
    style: undefined,
};

export default PercentColumn;
