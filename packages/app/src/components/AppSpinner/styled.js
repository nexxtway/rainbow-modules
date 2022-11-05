import styled from 'styled-components';
import { ZINDEX_SPINNER } from '../../styles/zIndex';

export const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    flex: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(239, 241, 245, 0.9);
    z-index: ${ZINDEX_SPINNER};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: rgba(239, 241, 245, 0.8);
        backdrop-filter: blur(5px);
    }
`;

export const StyledMessage = styled.span`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 1rem;
    margin-top: 0.5rem;
`;
