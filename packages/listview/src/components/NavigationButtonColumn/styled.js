import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = attachThemeAttrs(styled.button)`
    width: 90%;
    height: 28px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.rainbow.palette.background.hightlight};
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 5px;
    text-align: center;
    text-decoration: none;

    :hover {
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
    }

    :focus {
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
        outline: none;
    }
`;
