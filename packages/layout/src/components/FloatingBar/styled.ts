/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { ZINDEX_TOP_BAR } from '../../styles/zIndex';
import { ContainerProps } from './types';

export const StyledContainer = styled.div<ContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.disabled};
    transition-property: transform;
    transition-duration: 200ms;
    will-change: transform;
    transform: translateY(-101%);
    z-index: ${ZINDEX_TOP_BAR};
    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
    padding: 1rem 0;

    ${(props) =>
        props.isVisible &&
        `
        transform: translateY(0);
        `}
`;
