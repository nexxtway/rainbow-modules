import styled from 'styled-components';

export const StyledRow = styled.div`
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_8};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${(props) => props.theme.rainbow.palette.action.hover};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_9},
            ${(props) => props.theme.rainbow.shadows.shadow_3};
        z-index: 1;
    }
`;

export const StyledEmptyBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 32px auto;
    box-sizing: border-box;
`;

export const StyledEmptyIcon = styled.span`
    margin-bottom: 1rem;
    color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const StyledEmptyTitle = styled.h1`
    font-size: 1.25rem;
    font-weight: 900;
    text-align: center;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    margin: 0;
    padding: 0;
`;

export const StyledEmptyDescription = styled.h2`
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    margin: 0;
    margin-top: 0.5rem;
    padding: 0;
    font-weight: inherit;
`;

export const StyledHeader = styled.div`
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 900;
    color: ${(props) => props.theme.rainbow.palette.text.title};
    line-height: normal;
    white-space: nowrap;
    padding: 0;
    border-top: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};

    &:first-of-type .rainbow-table_header-container {
        padding-left: 18px;
    }

    :focus {
        outline: none;

        .rainbow-table_header-container {
            background-color: ${(props) => props.theme.rainbow.palette.background.main};
            border-color: ${(props) => props.theme.rainbow.palette.brand.main};
            color: ${(props) => props.theme.rainbow.palette.brand.main};
        }

        .rainbow-table_header-arrow {
            visibility: visible;
        }

        .rainbow-table_header-resize-bar,
        &:hover .rainbow-table_header-resize-bar {
            background-color: ${(props) => props.theme.rainbow.palette.brand.main};
        }

        &:hover .rainbow-table_header-container {
            border-color: ${(props) => props.theme.rainbow.palette.brand.main};
        }
    }
`;

export const StyledRowHeader = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};
`;

export const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 0.5rem;
`;

export const StyledCell = styled.div`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }
`;

export const StyledCellContent = styled.div`
    border: 1px solid transparent;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.875rem;
    min-height: 42px;
    line-height: 40px;
    padding: 0 0.5rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
`;
