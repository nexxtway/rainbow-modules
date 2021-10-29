import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';
import { ZINDEX_IFRAME_MODAL } from '../../styles/zIndex';

// eslint-disable-next-line import/prefer-default-export
export const StyledIframe = styled.iframe`
    border: none;
`;

export const FullPageContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    z-index: ${ZINDEX_IFRAME_MODAL};
`;

export const FullPageIframe = styled(StyledIframe)`
    width: 100vw;
    height: 100vh;
`;

export const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(164, 167, 181, 0.31);
    z-index: ${ZINDEX_IFRAME_MODAL};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupIframe = styled(StyledIframe)`
    width: 100%;
    height: 88vh;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    border-radius: 0.875rem;
    margin: 1.2rem;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
`;

export const CloseButton = styled(ButtonIcon)`
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export const PopupCloseButton = styled(CloseButton)`
    top: 0.2rem;
    right: 0.2rem;
    background-color: transparent;
`;
