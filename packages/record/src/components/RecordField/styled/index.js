import styled from 'styled-components';
import { attachThemeAttrs } from 'react-rainbow-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.1rem 0.2rem;

    ${(props) =>
        props.privateVariant === 'border-vertical' &&
        `
            padding-right: 24px;
            border-right: 1px solid ${props.theme.rainbow.palette.border.disabled};
            margin-right: 24px;

            :last-of-type {
                border-right: none;
                margin-right: 0;
            }
    `};

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            flex-direction: row;
            align-items: center;
            padding: 4px 0;
            line-height: 20px;
    `};

    ${(props) =>
        props.isEditable &&
        `
            :hover,
            :active,
            :focus {
                background-color: ${props.theme.rainbow.palette.background.disabled};
                cursor: pointer;
            }
        `}

    ${(props) =>
        props.isDirty &&
        `
            background-color: #fff9e6;

            :hover,
            :active,
            :focus {
                background-color: #fcf3d0;
            }
        `}
`;

export const Label = styled.span`
    font-size: 12px;
    line-height: 1.5;
    color: ${(props) => props.theme.rainbow.palette.text.header};

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            flex: 0 0 20%;
            min-width: 200px;
            max-width: 260px;
            padding-right: 4px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
    `};
`;

export const ValueContainer = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 1.5;
    position: relative;
    display: flex;

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            padding-right: 4px;
            padding-left: 4px;
            line-height: 20px;
    `};
`;

export const ComponentContainer = styled.div`
    order: 2;
`;

export const StyledLink = styled.a`
    color: ${(props) => props.theme.rainbow.palette.text.main};
    text-decoration: underline;

    :hover,
    :active,
    :visited {
        color: ${(props) => props.theme.rainbow.palette.text.main};
    }
`;

export const StyledLoadingLabel = styled.div`
    margin: 7px 0 8px 0;
    width: ${() => Math.floor(Math.random() * (120 - 92) + 92)}px;
    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
        margin: 4px 0 5px 0;
    `};
`;

export const StyledLoadingValue = styled.div`
    width: ${() => Math.floor(Math.random() * (150 - 92) + 92)}px;
`;

export const IconContainer = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.header};
    height: 100%;
    width: 22px;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 17px !important;
        height: 17px !important;
        font-size: 17px !important;
    }

    :not(button) {
        pointer-events: none;
    }

    ${(props) =>
        props.iconPosition === 'left' &&
        `
        order: 1;
        margin-right: 0.4rem;
    `}
    ${(props) =>
        props.iconPosition === 'right' &&
        `
        order: 3;
        margin-left: 0.4rem;
    `}
`;

export const EditIconContainer = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.disabled};
    height: 100%;
    margin-left: 0.4rem;
    order: 4;

    ${(props) => props.isHover && `color: ${props.palette.text.header};`}

    svg {
        width: 12px !important;
        height: 12px !important;
        font-size: 12px !important;
    }
`;

export const FieldLabel = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;

export const Error = styled.span`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
