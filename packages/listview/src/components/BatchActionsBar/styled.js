import styled from 'styled-components';
import { Badge, ButtonIcon } from 'react-rainbow-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from 'react-rainbow-components/styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from 'react-rainbow-components/styles/fontSizes';

export const StyledContainer = attachThemeAttrs(styled.div)`
    padding: 16px;
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    border: 1px solid transparent;
    box-shadow: 0 10px 28px 0 rgba(0, 0, 0, 0.2);
    border-radius: ${BORDER_RADIUS_2};
    transition: all 0.1s linear, padding 0s, border 0s;
    line-height: 2.5rem;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: fit-content; 
`;

export const StyledLeftContent = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledRightContent = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledBadge = styled(Badge)`
    flex: 0 0 auto;
    font-size: 20px;
    margin-right: 16px;
    height: 40px;
    line-height: 40px;
    font-weight: 800;
    padding: 0 16px;
`;

export const StyledLabel = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
    font-size: 20px;
    margin-right: 20px;
    color: ${(props) => props.palette.text.label};

`;

export const StyledClosetButton = attachThemeAttrs(styled(ButtonIcon))`
    flex: 0 0 auto;
    margin-left: 10px;
    color: ${(props) => props.palette.border.main};
`;

export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1 0 auto;
`;
