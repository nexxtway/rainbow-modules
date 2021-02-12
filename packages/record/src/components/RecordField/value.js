/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { RenderIf } from 'react-rainbow-components';
import * as formatterValueMap from './helpers/valueFormatter';
import { ComponentContainer, StyledLink } from './styled';

const Link = (props) => {
    // eslint-disable-next-line react/prop-types
    const { target, onClick, value } = props;
    const isTargetBlank = target === '_blank';
    const as = isTargetBlank ? 'a' : RouterLink;
    const rel = isTargetBlank ? 'noopener noreferrer' : undefined;
    return (
        <StyledLink as={as} to={value} href={value} onClick={onClick} target={target} rel={rel}>
            {value}
        </StyledLink>
    );
};

const Value = (props) => {
    const {
        type,
        value,
        currency,
        onClick,
        component: Component,
        target,
        restComponentProps,
    } = props;
    const isUrl = type === 'url';
    const formatterValue = formatterValueMap[type] || formatterValueMap.text;
    const formattedValue = formatterValue(value, currency);
    const RenderedComponent = Component || (() => null);

    return (
        <ComponentContainer>
            <RenderIf isTrue={isUrl}>
                <RenderIf isTrue={Component}>
                    <RenderedComponent {...restComponentProps} value={value} onClick={onClick} />
                </RenderIf>
                <RenderIf isTrue={!Component}>
                    <Link target={target} onClick={onClick} value={value} />
                </RenderIf>
            </RenderIf>
            <RenderIf isTrue={!isUrl}>
                <RenderIf isTrue={Component}>
                    <RenderedComponent {...restComponentProps} value={formattedValue} />
                </RenderIf>
                <RenderIf isTrue={!Component}>{formattedValue}</RenderIf>
            </RenderIf>
        </ComponentContainer>
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
        PropTypes.instanceOf(Date),
    ]),
    onClick: PropTypes.func,
    component: PropTypes.func,
    restComponentProps: PropTypes.object,
    target: PropTypes.string,
};

Value.defaultProps = {
    value: undefined,
    type: 'text',
    currency: 'USD',
    onClick: () => {},
    component: undefined,
    restComponentProps: undefined,
    target: '_self',
};

export default Value;
