import styled from 'styled-components';
import { Tree, Spinner } from 'react-rainbow-components';
import { ResizableColumns } from '@rainbow-modules/layout';

const BLACK_RUSSIAN = '#1e2128';
const EBONY = '#272c35';
const WHITE = '#fff';
const CONTROL_BAR_WIDTH = 52;

export const Container = styled.div<{ isFullScreen?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: ${EBONY};
    color: white;
    clip: border;
    z-index: unset;

    ${(props) =>
        props.isFullScreen &&
        `
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;
        z-index: 100000000;
    `}
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border-radius: 8px 8px 0 0;
    text-align: center;
    background: ${BLACK_RUSSIAN};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
`;

export const StyledResizableColumns = styled(ResizableColumns)`
    max-width: calc(100% - ${CONTROL_BAR_WIDTH}px);
`;

export const LeftColumn = styled.aside<{ isVisible?: boolean }>`
    box-sizing: border-box;
    flex: none;
    display: flex;
    flex-direction: row;
    transition: all 100ms linear;
    height: 100%;
    overflow: auto;

    ${(props) =>
        !props.isVisible &&
        `
        width: 0;
        min-width: 0;
    `}
`;

export const RightColumn = styled.main<{ isLoading?: boolean }>`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
    align-items: start;
    justify-content: start;

    > pre {
        height: 100%;
        flex: 1;
    }

    ${(props) =>
        props.isLoading &&
        `
        align-items: center;
        justify-content: center;
    `}
`;

export const ControlBar = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: ${CONTROL_BAR_WIDTH}px;
    box-sizing: border-box;
    padding-top: 1rem;
    flex-shrink: 0;
`;

export const FunctionInfo = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: start;
    padding: 26px 0 12px 16px;
`;

export const FunctionName = styled.span`
    display: inline-flex;
    align-items: center;
    padding-left: 8px;
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 280px;
`;

export const TreeContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100%;
    align-items: stretch;
    justify-content: start;
    background: ${BLACK_RUSSIAN};
    padding-bottom: 20px;
`;

export const SpinnerContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledSpinner = styled(Spinner)`
    position: unset;
    top: unset;
    left: unset;
    margin-bottom: 1rem;
    display: inline-block;
    align-self: center;
    box-sizing: border-box;
    transform: unset;
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    color: #fff;
    border-radius: 12px;
    outline: 0;
    cursor: pointer;
    box-sizing: border-box;
    font: inherit;
    appearance: button;
    margin-bottom: 20px;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover,
    &:active,
    &:focus {
        background: rgba(255, 255, 255, 0.1);
        outline: 0;
    }
`;

export const StyledTree = styled(Tree)`
    li[data-id='node-element-li'] > div[data-id='node-element'] {
        &:hover {
            background: ${EBONY};
        }
    }

    li[data-id='node-element-li'][aria-selected] > div[data-id='node-element'] {
        background: ${EBONY};

        span {
            color: ${WHITE};
            font-weight: bold;
        }
    }
`;

export const SpinnerIcon = styled(Spinner)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: unset;
    z-index: unset;
    transform: translate(0, 0);
`;
