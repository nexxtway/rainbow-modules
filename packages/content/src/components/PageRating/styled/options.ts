import styled from 'styled-components';
import Option from '../option';

export const SadOption = styled(Option)`
    ${(props) =>
        props.isSelected &&
        `
    color: ${props.theme.rainbow.palette.error.main};
    `}
`;

export const NeutralOption = styled(Option)`
    ${(props) =>
        props.isSelected &&
        `
    color: ${props.theme.rainbow.palette.warning.main};
    `}
`;

export const HappyOption = styled(Option)`
    ${(props) =>
        props.isSelected &&
        `
    color: ${props.theme.rainbow.palette.success.main};
    `}
`;
