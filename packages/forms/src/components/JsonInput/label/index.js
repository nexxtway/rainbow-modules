import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RenderIf } from 'react-rainbow-components';
import RequiredAsterisk from '../../RequiredAsterisk';
import LabelText from './labelText';

const HiddenElement = styled.span`
    position: absolute !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    text-transform: none !important;
    white-space: nowrap !important;

    ${(props) =>
        props.as === 'input' &&
        `
            box-sizing: border-box;
        `};
    ${(props) =>
        props.as === 'label' &&
        `
            box-sizing: border-box;
        `};
`;

export default function Label(props) {
    const {
        className,
        label,
        required,
        inputId,
        readOnly,
        id,
        labelAlignment,
        hideLabel,
        variant,
        as,
    } = props;
    if (hideLabel) {
        return (
            <HiddenElement as="label" htmlFor={inputId} id={id}>
                <RequiredAsterisk required={required} />
                {label}
            </HiddenElement>
        );
    }

    return (
        <RenderIf isTrue={label}>
            <LabelText
                className={className}
                readOnly={readOnly}
                labelAlignment={labelAlignment}
                htmlFor={inputId}
                as={as}
                id={id}
                variant={variant}
            >
                <RequiredAsterisk required={required} />
                {label}
            </LabelText>
        </RenderIf>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    required: PropTypes.bool,
    inputId: PropTypes.string,
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    as: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'inverse']),
};

Label.defaultProps = {
    className: undefined,
    label: undefined,
    required: false,
    inputId: undefined,
    readOnly: false,
    id: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    as: undefined,
    variant: 'default',
};
