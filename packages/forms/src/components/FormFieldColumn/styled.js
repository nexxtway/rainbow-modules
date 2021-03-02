import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const EditableContainer = styled.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 32px;

    :hover {
        > button {
            display: inline-flex;
        }
    }

    ${(props) =>
        props.cellAlignment === 'right' &&
        `
        padding-right: 8px;
        padding-left: 32px;
    `}

    ${(props) =>
        props.isDirty &&
        `
            background-color: #fff9e6;

            :hover,
            :active,
            :focus {
                background-color: #fcf3d0;
            }
    `}
`;

export const StyledButtonIcon = styled(ButtonIcon)`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    display: none;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    ${(props) =>
        props.cellAlignment === 'right' &&
        `
        left: 0;
    `}

    ${(props) =>
        props.disabled &&
        `
        cursor: default;
    `}
`;
