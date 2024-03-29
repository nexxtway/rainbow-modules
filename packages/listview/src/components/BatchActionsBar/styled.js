import styled from 'styled-components';
import { Badge, ButtonIcon, attachThemeAttrs } from 'react-rainbow-components';

export const FONT_SIZE_TEXT_LARGE = '1rem';

export const BORDER_RADIUS_2 = '12rem';

export const StyledContainer = attachThemeAttrs(styled.div)`
    padding: 8px 8px 8px 12px;
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    border: 1px solid transparent;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
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
    font-size: 18px;
    margin-right: 16px;
    height: 36px;
    line-height: 36px;
    font-weight: 800;
    padding: 0 12px;
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
