import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { replaceAlpha } from 'react-rainbow-components/styles/helpers/color';
import { MagnifyingGlass, CubeFilled } from '@rainbow-modules/icons';

export const Backdrop = attachThemeAttrs(styled.section)`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: ${(props) => replaceAlpha(props.theme.rainbow.palette.background.highlight, 0.3)};
    display: flex;
    justify-content: center;
    position: fixed;
    transition: opacity 0.3s linear, z-index 0.3s linear;
    backdrop-filter: blur(5px);
`;

export const Container = styled.div`
    width: 60%;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 14px;
    position: absolute;
`;

export const StyledHeader = styled.header`
    padding: 8px 0;
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const OptionsContainer = styled.ul`
    list-style: none;
    margin: 12px 0;
    padding: 0;
    max-height: 57vh;
    overflow-y: auto;
`;

export const StyledOption = styled.li`
    display: flex;
    padding: 12px;

    :hover {
        cursor: pointer;
        background: ${(props) => props.theme.rainbow.palette.action.active};
    }

    ${(props) =>
        props.isActive &&
        `
        cursor: pointer;
        background: ${props.theme.rainbow.palette.action.active};
    `}
`;

export const OptionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    width: 100%;
`;

export const OptionIconContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    min-width: 32px;
    height: 32px;
    color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const Label = styled.span`
    font-size: 16px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 1.5;
`;

export const Description = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    line-height: 1.5;
`;

export const StyledMagnifyingGlass = styled(MagnifyingGlass)`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    height: 20px;
    width: 20px;
`;

export const BrandMagnifyingGlass = styled(MagnifyingGlass)`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    align-self: center;
    height: 20px;
    width: 20px;
`;

export const ResultsContainer = styled.div`
    background: ${(props) => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
`;

export const Content = styled.div`
    background: ${(props) => props.theme.rainbow.palette.background.secondary};
    border-radius: 0 0 14px 14px;
`;

export const ResultsContent = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
    overflow-y: scroll;
    height: calc(100vh - 101px);
`;

export const ResultItemContainer = styled.li`
    background: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 12px;
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_3};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 8px;

    :hover {
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
        cursor: pointer;
    }
`;

export const IconContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    min-width: 44px;
    height: 44px;
    background: ${(props) => props.theme.rainbow.palette.background.secondary};
    color: ${(props) => props.theme.rainbow.palette.border.divider};
    border-radius: 44px;
`;

export const StyledCubeFilled = styled(CubeFilled)`
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const InitialContainer = styled.div`
    padding: 16px 0;
`;

export const OptionHeader = styled.li`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    line-height: 1.5;
    font-size: 0.8125rem;
    list-style: none;
    margin-left: 20px;
`;
