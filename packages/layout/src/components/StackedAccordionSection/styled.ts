import styled from 'styled-components';
import { IsExpandedProps } from './types';

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

export const StyledSectionContent = styled.div<IsExpandedProps>`
    position: absolute;
    top: 1.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 0;
    box-sizing: border-box;

    ${(props) =>
        props.isExpanded &&
        `
        overflow: auto;
        height: auto;
        padding: 0.5rem;
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

export const StyledResizeBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    cursor: row-resize;
    z-index: 1;
    height: 2px;
`;
