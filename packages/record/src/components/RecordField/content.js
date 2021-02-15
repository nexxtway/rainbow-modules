/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf, LoadingShape } from 'react-rainbow-components';
import { PencilFilled } from '@rainbow-modules/icons';
import Value from './value';
import {
    Label,
    ValueContainer,
    StyledLoadingValue,
    StyledLoadingLabel,
    IconContainer,
    EditIconContainer,
    Error,
} from './styled';

export default function Content(props) {
    const {
        isEditable,
        privateVariant,
        isLoading,
        label,
        type,
        icon,
        iconPosition,
        component,
        value,
        currency,
        onClick,
        target,
        isHover,
        error,
        ...restComponentProps
    } = props;

    return (
        <>
            <Label privateVariant={privateVariant}>
                <RenderIf isTrue={isLoading}>
                    <StyledLoadingLabel privateVariant={privateVariant}>
                        <LoadingShape />
                    </StyledLoadingLabel>
                </RenderIf>
                <RenderIf isTrue={!isLoading}>{label}</RenderIf>
            </Label>
            <ValueContainer
                privateVariant={privateVariant}
                type={type}
                icon={icon}
                iconPosition={iconPosition}
            >
                <RenderIf isTrue={isLoading}>
                    <StyledLoadingValue>
                        <LoadingShape />
                    </StyledLoadingValue>
                </RenderIf>
                <RenderIf isTrue={!isLoading}>
                    <RenderIf isTrue={icon}>
                        <IconContainer iconPosition={iconPosition}>{icon}</IconContainer>
                    </RenderIf>
                    <Value
                        component={component}
                        type={type}
                        value={value}
                        currency={currency}
                        onClick={onClick}
                        target={target}
                        isEditable={isEditable}
                        restComponentProps={restComponentProps}
                    />
                    <RenderIf isTrue={isEditable}>
                        <EditIconContainer isHover={isHover}>
                            <PencilFilled />
                        </EditIconContainer>
                    </RenderIf>
                </RenderIf>
            </ValueContainer>
            <RenderIf isTrue={isEditable && error}>
                <Error>{error}</Error>
            </RenderIf>
        </>
    );
}

Content.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Content.defaultProps = {
    className: undefined,
    style: undefined,
};
