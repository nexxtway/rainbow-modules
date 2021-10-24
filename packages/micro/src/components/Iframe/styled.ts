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

export const CloseButton = styled(ButtonIcon)`
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
