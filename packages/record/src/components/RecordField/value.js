import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import * as formatterValueMap from './helpers/valueFormatter';

const Value = (props) => {
    const { type, value, currency, href, onClick } = props;
    const isUrl = type === 'url';
    const formatterValue = formatterValueMap[type] || formatterValueMap.text;
    const formattedValue = formatterValue(value, currency);

    return (
        <>
            <RenderIf isTrue={isUrl}>
                <a href={href} onClick={onClick}>
                    {value}
                </a>
            </RenderIf>
            <RenderIf isTrue={!isUrl}>{formattedValue}</RenderIf>
        </>
    );
};

Value.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'currency',
        'number',
        'percent',
        'date',
        'time',
        'dateTime',
        'url',
    ]),
    currency: PropTypes.string,
    href: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func,
};

Value.defaultProps = {
    value: undefined,
    type: 'text',
    currency: 'USD',
    href: undefined,
    onClick: () => {},
};

export default Value;
