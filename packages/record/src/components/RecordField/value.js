import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import * as formaterValueMap from './helpers/valueFormater';

const Value = (props) => {
    const { type, value, currency, href, onClick } = props;
    const isUrl = type === 'url';
    const types = type === 'url' ? 'text' : type;

    return (
        <>
            <RenderIf isTrue={isUrl}>
                <a href={href} onClick={onClick}>
                    {value}
                </a>
            </RenderIf>
            <RenderIf isTrue={!isUrl}>{formaterValueMap[types](value, currency)}</RenderIf>
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
