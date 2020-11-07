import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';
import { replaceAlpha } from 'react-rainbow-components/styles/helpers/color';
import { MagnifyingGlass, CubeFilled } from '@rainbow-modules/icons';
import { UniversalPicker } from '@rainbow-modules/forms';

export const Backdrop = attachThemeAttrs(styled.section)`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: ${(props) => replaceAlpha(props.palette.background.highlight, 0.3)};
    display: flex;
    justify-content: center;
    position: fixed;
    transition: opacity 0.3s linear, z-index 0.3s linear;
    backdrop-filter: blur(5px);
`;

export const Container = styled.div`
    width: 60%;
    height: fit-content;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 14px;
`;

export const StyledHeader = attachThemeAttrs(styled.header)`
    padding: 8px 0;
    border-bottom: 1px solid ${(props) => props.palette.border.divider};
`;

export const OptionsContainer = styled.ul`
    list-style: none;
    margin: 12px 0;
    padding: 0;
`;

export const StyledOption = attachThemeAttrs(styled.li)`
    display: flex;
    padding: 12px;

    :hover {
        cursor: pointer;
        background: ${(props) => props.palette.action.active};
    }
`;

export const OptionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    width: 100%;
`;

export const OptionIconContainer = attachThemeAttrs(styled.span)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    min-width: 32px;
    height: 32px;
    color: ${(props) => props.palette.border.divider};
`;

export const Label = attachThemeAttrs(styled.span)`
    display: inline-block;
    font-size: 16px;
    color: ${(props) => props.palette.text.main};
    line-height: 1.5;
`;

export const Description = attachThemeAttrs(styled.span)`
    display: inline-block;
    font-size: 14px;
    color: ${(props) => props.palette.text.header};
    line-height: 1.5;
`;

export const StyledMagnifyingGlass = attachThemeAttrs(styled(MagnifyingGlass))`
    color: ${(props) => props.palette.text.header};
    height: 20px;
    width: 20px;
`;

export const BrandMagnifyingGlass = attachThemeAttrs(styled(MagnifyingGlass))`
    color: ${(props) => props.palette.brand.main};
    align-self: center;
    height: 20px;
    width: 20px;
`;

export const ResultsContainer = attachThemeAttrs(styled.div)`
    background: ${(props) => props.palette.background.main};
    border-radius: 0 0 14px 14px;
`;

export const Content = attachThemeAttrs(styled.div)`
    background: ${(props) => props.palette.background.secondary};
    padding: 20px;
    border-radius: 0 0 14px 14px;
`;

export const ResultsContent = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ResultItemContainer = attachThemeAttrs(styled.li)`
    background: ${(props) => props.palette.background.main};
    padding: 12px;
    border-radius: 12px;
    box-shadow: ${(props) => props.shadows.shadow_3};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    :hover {
        box-shadow: ${(props) => props.shadows.shadow_4};
        cursor: pointer;
    }
`;

export const IconContainer = attachThemeAttrs(styled.span)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    min-width: 44px;
    height: 44px;
    background: ${(props) => props.palette.background.secondary};
    color: ${(props) => props.palette.border.divider};
    border-radius: 44px;
`;

export const StyledCubeFilled = attachThemeAttrs(styled(CubeFilled))`
    width: 20px;
    height: 20px;
    color: ${(props) => props.palette.border.divider};
`;

export const EmptyModeContainer = styled.div`
    padding: 16px 0;
`;

export const StyledChipOption = attachThemeAttrs(styled.div)`
    background: ${(props) => props.palette.background.highlight};
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 32px;
    color: ${(props) => props.palette.text.label};

    :hover {
        cursor: pointer;
        background: ${(props) => props.palette.action.hover};
        color: ${(props) => props.palette.text.main};
    }
`;

export const StyledUniversalPicker = styled(UniversalPicker)`
    margin: 0 8px;

    > div {
        justify-content: flex-start;
    }
`;

export const OptionHeader = attachThemeAttrs(styled.li)`
    color: ${(props) => props.palette.text.label};
    line-height: 1.5;
    font-size: 0.8125rem;
    list-style: none;
    margin-left: 24px;
    margin-top: 16px;
`;
