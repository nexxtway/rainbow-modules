import styled from 'styled-components';
import { ButtonIcon, Spinner } from 'react-rainbow-components';
import { ZINDEX_IFRAME_MODAL } from '../../styles/zIndex';

// eslint-disable-next-line import/prefer-default-export
export const StyledIframe = styled.iframe`
    border: none;
`;

const AnimatedContainer = styled.div`
    animation: fadein 500ms;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const FullPageContainer = styled(AnimatedContainer)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    z-index: ${ZINDEX_IFRAME_MODAL};
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
    box-sizing: border-box;
    margin-bottom: 4px;
    display: flex;
    flex: 0;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    min-height: 40px;
    display: flex;
    align-items: center;
`;

export const FullPageInnerContainer = styled.div`
    width: 100vw;
    flex: 1 1 auto;
`;

export const FullPageIframe = styled(StyledIframe)<{ isLoading?: boolean }>`
    width: 100vw;
    height: 100%;
    ${(props) => props.isLoading && 'visibility: hidden'}
`;

export const FullCloseButton = styled(ButtonIcon)`
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 10px;
`;

export const PopupContainer = styled(AnimatedContainer)`
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

    animation: fadein 500ms;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const PopupInnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 88vh;
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    border-radius: 0.875rem;
    margin: 1.2rem;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
`;

export const PopupIframe = styled(StyledIframe)<{ isLoading?: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: 0.875rem;
    ${(props) => props.isLoading && 'visibility: hidden'}
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

export const StyledSpinner = styled(Spinner)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
`;
