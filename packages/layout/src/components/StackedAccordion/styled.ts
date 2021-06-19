/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContainer = styled.div<{ isResizing?: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${(props) =>
        props.isResizing &&
        `
        user-select: none;
        cursor: row-resize;

        & button {
            cursor: row-resize;
        }
    `}
`;
