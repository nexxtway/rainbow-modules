/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { ZINDEX_TOP_BAR } from '../../styles/zIndex';

export const StyledContainer = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.main};
    transition-property: transform;
    transition-duration: 200ms;
    will-change: transform;
    transform: translateY(-100%);
    z-index: ${ZINDEX_TOP_BAR};

    ${(props) =>
        props.isOpen &&
        `
        transform: translateY(0);
        `}
`;
