import styled from 'styled-components';
import { ContentProps, IsExpandedProps } from './types';

export const StyledSection = styled.div<IsExpandedProps>`
    border-top: solid 1px ${(props) => props.theme.rainbow.palette.border.divider};
    min-height: 1.5rem;
    position: relative;

    &:last-child {
        border-bottom: solid 1px ${(props) => props.theme.rainbow.palette.border.divider};
    }

    ${(props) =>
        !props.isExpanded &&
        `
        max-height: 1.5rem;        
    `}

    ${(props) =>
        props.isExpanded &&
        `
        flex: 1 1 100px;
        min-height: 100px;
    `}
`;

export const StyledSectionHeader = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid transparent;
    background: transparent;
    width: 100%;
    height: 1.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
`;

export const StyledSectionContent = styled.div<ContentProps>`
    position: absolute;
    top: 1.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    height: auto;
    padding: 0.5rem;
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: 250ms;

    ${(props) =>
        props.isScrolled &&
        `
        box-shadow: inset 1px 5px 6px -7px
    `}
`;

export const StyledArrowIcon = styled.svg<IsExpandedProps>`
    transform: rotate(-90deg);
    fill: ${(props) => props.theme.rainbow.palette.text.header};
    transition: transform 0.15s linear;
    vertical-align: middle;
    width: 1rem;
    margin-right: 0.5rem;

    :not(:root) {
        overflow: hidden;
    }

    ${(props) =>
        props.isExpanded &&
        `
            transform: rotate(0deg);
            transition: transform 0.15s linear;
        `};
`;

export const StyledResizeBar = styled.div<{ isResizing: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    cursor: row-resize;
    z-index: 1;
    height: 2px;
    transition-property: background-color;
    transition-duration: 250ms;

    :hover {
        background-color: ${(props) => props.theme.rainbow.palette.brand.main};
    }

    ${(props) =>
        props.isResizing &&
        `
    background-color: ${props.theme.rainbow.palette.brand.main};
    `}
`;
