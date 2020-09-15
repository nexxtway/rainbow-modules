import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 0 0.25rem 0.5rem 0.25rem;
    flex: 1 0 auto;
    min-width: 190px;
`;

export const StyledInput = styled.input`
    position: absolute !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    text-transform: none !important;
    white-space: nowrap !important;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    line-height: normal;

    &:focus + label {
        border: solid 1px ${(props) => props.theme.rainbow.palette.brand.light};
        box-shadow: ${(props) => props.theme.rainbow.shadows.brand};
    }
`;

export const StyledLabelInput = styled.label`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 6px 15px;
    border-radius: 14px;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_4};
    border: solid 1px rgba(227, 229, 237, 0.25);

    &:hover {
        cursor: pointer;
        border: solid 1px ${(props) => props.theme.rainbow.palette.brand.main};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_2};
    }
`;

export const StyledLabel = styled.p`
    font-size: 14px;
`;

export const StyledValue = styled.h1`
    font-size: 32px;
    font-weight: 800;
`;
