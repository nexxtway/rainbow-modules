import styled from 'styled-components';
import { Badge, ButtonIcon } from 'react-rainbow-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from 'react-rainbow-components/styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from 'react-rainbow-components/styles/fontSizes';

export const StyledContainer = attachThemeAttrs(styled.div)`
    position: fixed;
    bottom: 30px;
    left: 10px;
    right: 10px;
    padding: 0.5rem;
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    border: 1px solid ${(props) => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    transition: all 0.1s linear, padding 0s, border 0s;
    line-height: 2.5rem;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    display: flex;
`;

export const StyledBadge = styled(Badge)`
    flex: 0 0 auto;
    font-size: 1.2rem;
    margin-right: 10px;
`;

export const StyledLabel = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${(props) => props.palette.text.header};

`;

export const StyledClosetButton = styled(ButtonIcon)`
    flex: 0 0 auto;
    margin-left: 10px;
`;

export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1 0 auto;
`;
