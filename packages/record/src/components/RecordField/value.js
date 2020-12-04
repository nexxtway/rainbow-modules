import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import * as formatterValueMap from './helpers/valueFormatter';

const Value = (props) => {
    const {
        type,
        value,
        currency,
        href,
        onClick,
        component: Component,
        restComponentProps,
    } = props;
    const isUrl = type === 'url';
    const formatterValue = formatterValueMap[type] || formatterValueMap.text;
    const formattedValue = formatterValue(value, currency);

    return (
        <>
            <RenderIf isTrue={isUrl}>
                <RenderIf isTrue={Component}>
                    <Component {...restComponentProps} value={value} href={href} />
                </RenderIf>
                <RenderIf isTrue={!Component}>
                    <a href={href} onClick={onClick}>
                        {value}
                    </a>
                </RenderIf>
            </RenderIf>
            <RenderIf isTrue={!isUrl}>
                <RenderIf isTrue={Component}>
                    <Component {...restComponentProps} value={formattedValue} />
                </RenderIf>
                <RenderIf isTrue={!Component}>{formattedValue}</RenderIf>
            </RenderIf>
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
    component: PropTypes.func,
    restComponentProps: PropTypes.object,
};

Value.defaultProps = {
    value: undefined,
    type: 'text',
    currency: 'USD',
    href: undefined,
    onClick: () => {},
    component: undefined,
    restComponentProps: undefined,
};

export default Value;
