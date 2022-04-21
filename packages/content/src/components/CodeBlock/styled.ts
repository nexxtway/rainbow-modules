import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};
`;

export const StyledLabel = styled.h3`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.875rem;
    font-weight: bold;
`;

export const StyledContent = styled.div`
    position: relative;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.rainbow.palette.background.disabled};
`;

export const StyledPre = styled.pre<{ selectedTheme?: string }>`
    background: none !important;
    margin: 0;
    font-size: 0.875rem;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: ${(props) => (props.selectedTheme === 'dark' ? '#474B53' : '#EFF1F5')};
        border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => (props.selectedTheme === 'dark' ? '#5C6270' : '#D0D6E2')};
    }

    .linenumber {
        color: ${(props) => props.theme.rainbow.palette.text.disabled};
        font-weight: bold;
    }
`;

export const StyledCopyButton = styled.div<{ hideHeader?: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        color: ${(props) => props.theme.rainbow.palette.success.dark};
        width: 1.5rem;
        height: 1.5rem;
    }

    ${(props) =>
        props.hideHeader &&
        `
    position: absolute;
    top: 2px;
    right: 2px;    
    `}
`;

export const StyledCopiedMessage = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 6px 12px;
    border-radius: 14px;
    color: ${(props) => props.theme.rainbow.palette.success.dark};
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    z-index: 10;
`;
