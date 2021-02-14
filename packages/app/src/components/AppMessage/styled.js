import React from 'react';
import styled from 'styled-components';
import { ButtonIcon as RainbowButtonIcon } from 'react-rainbow-components';
import { Error } from '@rainbow-modules/icons';
import { ZINDEX_APP_MESSAGE } from '../../styles/zIndex';

function getBackgroundColor(props) {
    const { palette } = props.theme.rainbow;
    if (palette[props.variant]) {
        return palette[props.variant].main;
    }
    return palette.error.main;
}

function attachProps(props) {
    const { palette } = props.theme.rainbow;
    return {
        getContrastText: palette.getContrastText,
        variantColor: getBackgroundColor(props),
    };
}

export const Container = styled.article`
    padding: 16px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: ${ZINDEX_APP_MESSAGE};
    transform: translateY(-101%);
    transition: transform 250ms linear, opacity 250ms linear;
    background-color: ${(props) => getBackgroundColor(props)};

    ${(props) =>
        props.isVisible &&
        `
        transform: translateY(0%);
    `}
`;

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 980px;
`;

export const MessageText = styled.p.attrs(attachProps)`
    color: ${(props) => props.getContrastText(props.variantColor)};
    padding: 0 16px;
    font-size: 16px;
    font-weight: 500;
    flex-grow: 1;
`;

export const ButtonIcon = styled((props) => <RainbowButtonIcon {...props} />).attrs(attachProps)`
    flex-shrink: 0;
    color: ${(props) => props.getContrastText(props.variantColor)};
`;

export const MessageIcon = styled(Error).attrs(attachProps)`
    flex-shrink: 0;
    color: ${(props) => props.getContrastText(props.variantColor)};
`;
