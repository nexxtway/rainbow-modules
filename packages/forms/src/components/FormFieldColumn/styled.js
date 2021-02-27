import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';

export const EditableContainer = styled(Container)`
    position: relative;

    :hover {
        > button {
            display: inline-flex;
        }
    }

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
    right: 8px;

    ${(props) =>
        props.disabled &&
        `
        cursor: default;
    `}
`;
