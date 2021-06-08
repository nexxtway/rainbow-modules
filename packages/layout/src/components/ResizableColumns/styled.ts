import styled from 'styled-components';
import { ContainerProps, ColumnProps, DividerProps } from './types';

export const StyledContainer = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    ${(props) =>
        props.isResizing &&
        `
        cursor: col-resize;
        user-select: none;
    `}
`;

export const StyledLeftColumn = styled.div<ColumnProps>`
    min-width: ${(props) => props.minWidth};
    ${(props) =>
        props.initialDividerWidth &&
        props.initialDividerWidth < 0 &&
        `
        flex: 1;
    `}
`;

export const StyledDivider = styled.div.attrs<DividerProps>((props) => ({
    style: {
        transform: `translateX(${(props.offset ?? 0) - 3}px)`,
    },
}))<DividerProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 9px;
    cursor: col-resize;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 3px;
        width: 1px;
        background-color: ${(props) => props.theme.rainbow.palette.border.divider};
        transition-property: background-color;
        transition-duration: 250ms;

        ${(props) => props.hideDivider && `background-color: transparent;`}
    }

    ${(props) =>
        props.isResizing &&
        `
        &::after {
            width: 3px;
            background-color: ${props.theme.rainbow.palette.brand.main};
        }
    `}

    &:hover {
        &::after {
            width: 3px;
            background-color: ${(props) => props.theme.rainbow.palette.brand.main};
        }
    }
`;

export const StyledRightColumn = styled.div<ColumnProps>`
    min-width: ${(props) => props.minWidth};
    ${(props) =>
        props.initialDividerWidth &&
        props.initialDividerWidth >= 0 &&
        `
        flex: 1;
    `}
`;
