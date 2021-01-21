import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

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

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            padding-right: 4px;
            padding-left: 4px;
            line-height: 20px;
    `};
    ${(props) =>
        props.icon &&
        props.iconPosition === 'left' &&
        `
        padding-left: 30px;
    `}
`;

export const Link = styled.a`
    color: ${(props) => props.theme.rainbow.palette.text.main};
    text-decoration: underline;

    :hover {
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
    top: 0;
    position: absolute;
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
        left: 0.1rem;
    `}
    ${(props) =>
        props.iconPosition === 'right' &&
        `
        right: 0;
    `}
`;
