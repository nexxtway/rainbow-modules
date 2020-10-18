import styled from 'styled-components';
import { UniversalPicker } from '@rainbow-modules/forms';
import { ButtonIcon } from 'react-rainbow-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

export const StyledContainer = styled.div`
    width: 100%;
    height: 135px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
`;

export const StylesScrollable = styled.div`
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
`;

export const StyledUniversalPicker = styled(UniversalPicker)`
    > div {
        flex-wrap: nowrap;
    }
`;

export const StyledArrowButton = attachThemeAttrs(styled(ButtonIcon))`
    color: ${(props) => props.palette.text.header};
    ${(props) =>
        props.disabled &&
        `
            color: ${(props) => props.palette.text.disabled};
        `};
`;
