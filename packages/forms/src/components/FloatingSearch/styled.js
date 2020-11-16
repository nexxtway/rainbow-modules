import styled from 'styled-components';
import { Input } from 'react-rainbow-components';

import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

export const StyledContainer = attachThemeAttrs(styled.div)`
    padding: 5px;
    border: solid 1px ${(props) => props.theme.rainbow.palette.border.divider};
    border-radius: 100px;
    background: ${(props) => props.theme.rainbow.palette.background.main};
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0.7rem;
`;

export const StyledDivider = attachThemeAttrs(styled.div)`
    margin:0 5px;
    width: 1px;
    display: inline-block;
    background-color: ${(props) => props.palette.border.divider};
`;

export const StyledClearButton = attachThemeAttrs(styled.button)`
    background-color: transparent;
    border: none;
    :hover{
        color: ${(props) => props.theme.rainbow.palette.brand.main};
    }
`;

export const StyledInput = styled(Input)`
    > div > input {
        padding-right: 85px;

        :focus {
            padding-right: 85px;
        }
    }
`;
