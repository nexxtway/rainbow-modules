import styled from 'styled-components';

export const JsonInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 6rem;
`;

export const CodeEditorContainer = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: auto;
`;

export const CodeEditor = styled.div.attrs((props) => props.theme.rainbow)`
    width: 100%;
    height: 100%;

    .jsoneditor {
        border-radius: 0.875rem;
        background-color: ${(props) => props.palette.background.main};
        border: solid 2px ${(props) => props.palette.border.main};
        overflow: hidden;

        ${(props) =>
            props.isFocused &&
            `
            background-color: red;
            border: solid 2px ${props.palette.brand.main};
            box-shadow: ${props.shadows.brand};
            `}

        ${(props) =>
            props.error &&
            `
            border: solid 2px ${props.palette.error.main};
            background-clip: padding-box;

            :focus-within {
                box-shadow: ${props.shadows.error};
                border: solid 2px ${props.palette.error.main};
            }
        `};

        ${(props) =>
            props.disabled &&
            `
            background-color: ${props.palette.background.disabled};
            border: solid 1px ${props.palette.border.disabled};
            color: ${props.palette.text.disabled};

            :focus-within {
                box-shadow: none;
            }
        `};

        ${(props) =>
            props.readOnly &&
            `
            border: none;
            border-radius: 0;
            background-color: transparent;

            :focus-within {
                box-shadow: none;
                border: none;
            }
        `};
    }
`;

export const ErrorText = styled.div`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    align-self: start;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
