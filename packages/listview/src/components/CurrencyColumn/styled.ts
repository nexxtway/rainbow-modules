/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCellContainer = styled.div<{ cellAlignment?: 'left' | 'right' | 'center' }>`
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: ${(props) => props.cellAlignment};
`;
