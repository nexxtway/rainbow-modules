import { attachThemeAttrs } from 'react-rainbow-components';
import styled from 'styled-components';
import { Trash } from '@rainbow-modules/icons';

const getInitialBorder = (props) => {
    if (props.error) {
        return `2px solid ${props.palette.error.main}`;
    }
    return `1px solid ${props.palette.border.divider}`;
};

const getColor = (props) => {
    if (props.error) {
        return props.palette.error.main;
    }
    return props.palette.brand.main;
};

const getShadow = (props) => {
    if (props.error) {
        return props.shadows.error;
    }
    return props.shadows.brand;
};

const BORDER_RADIUS_2 = '12rem';

export const StyledRadio = attachThemeAttrs(styled.span)`
    position: relative;
    width: 20px;
    height: 20px;
    padding: 0;
    background: ${(props) => props.palette.background.main};
    border: ${getInitialBorder};
    border-radius: ${BORDER_RADIUS_2};
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    transition: all 0.2s ease;
    margin-right: 12px;

    &::after {
        content: '';
        position: absolute;
        height: 12px;
        width: 12px;
        top: 2px;
        left: 2px;
        background: transparent;
        border-radius: ${BORDER_RADIUS_2};
        box-sizing: border-box;
        opacity: 1;
        transform: scale(0.1, 0.1);
        transition: all 0.2s ease-in;
    }

    ${(props) =>
        props.isSelected &&
        `
        background: ${props.palette.background.main};
        border: 2px solid;
        border-color: ${getColor(props)};

        &::after {
            opacity: 1;
            transform: scale(1, 1);
            transition: all 0.2s ease-in;
            background: ${getColor(props)};
            box-sizing: border-box;
        }
    `};

    ${(props) =>
        props.isFocused &&
        `
        border: 2px solid;
        border-color: ${getColor(props)};
        box-shadow: ${getShadow(props)};
    `};

    ${(props) =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border-color: ${props.palette.border.divider};

        &::after {
            background: ${props.palette.background.main};
            box-sizing: border-box;
        }
    `};
`;

export const StyledRadioItem = attachThemeAttrs(styled.span)`
    position: relative;
    width: 100%;
    min-height: 64px;
    padding: 8px 8px 8px 12px;
    background-color: ${(props) => props.palette.background.main};
    border: solid 1px ${(props) => props.palette.border.divider};
    border-radius: 14px;
    box-shadow: ${(props) => props.shadows.shadow_4};
    display: flex;
    align-items: center;

    ${(props) =>
        props.isHover &&
        `
        border: solid 1px ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_2};
        cursor: pointer;
    `};

    ${(props) =>
        props.isFocused &&
        `
        border: solid 1px ${props.palette.brand.light};
        box-shadow: ${props.shadows.shadow_4}, ${props.shadows.brand};
    `};

    ${(props) =>
        props.isSelected &&
        `
        border: solid 1px ${props.palette.brand.main};
    `};

    ${(props) =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border: solid 1px ${props.palette.border.disabled};
        box-shadow: 0 0 0 0 transparent;
        cursor: not-allowed;
    `};
`;

export const StyledContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;

export const RightContent = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
`;

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLabelNewCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.main};
    font-size: 18px;
    line-height: 2;
    margin-left: 12px;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;

export const StyledLabelCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.header};
    font-size: 14px;
    line-height: 1.5;
`;

export const StyledNumberCard = attachThemeAttrs(styled.span)`
    color: ${(props) => props.palette.text.main};
    font-size: 16px;
    line-height: 1.5;
`;

export const AddNewCardButton = attachThemeAttrs(styled(StyledRadioItem))`
    margin: 4px 0.25rem 0.5rem 0.25rem;
    padding: 12px 8px 12px 12px;
    outline: none;
    color: ${(props) => props.palette.brand.main};

    &:hover {
        border: solid 1px ${(props) => props.palette.brand.main};
        background: ${(props) => props.palette.background.secondary};
    }

    &:focus {
        border: solid 1px ${(props) => props.palette.brand.main};
    }
`;

export const TrashIcon = attachThemeAttrs(styled(Trash))`
    width: 60px;
    height: 60px;
    margin: 12px 12px 20px 0;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;

export const LoadingContent = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

export const LoadingCard = styled.div`
    width: 52px;
    height: 36px;
    margin-right: 12px;
    border-radius: 4px;
    overflow: hidden;
`;

export const LoadingInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 36px;
    flex-grow: 1;
    margin-left: 4px;
`;

export const LoadingFirstLine = styled.div`
    width: 70%;

    ${(props) =>
        props.lineWidth === 'small' &&
        `
        width: 50%;
    `};
`;

export const LoadingSecondLine = styled.div`
    width: 40%;

    ${(props) =>
        props.lineWidth === 'small' &&
        `
        width: 20%;
    `};
`;
