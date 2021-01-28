import styled from 'styled-components';
import { CircleFilled } from '@rainbow-modules/icons';

export const StyledFilterLabel = styled.span`
    margin-left: 0.5rem;
`;

export const StyledCircleFilledIcon = styled(CircleFilled)`
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
