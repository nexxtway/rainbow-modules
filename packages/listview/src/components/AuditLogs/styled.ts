import styled from 'styled-components';
import { List } from '@rainbow-modules/icons';
import {
    BadgeOverlay,
    Button,
    ButtonIcon,
    MultiSelect,
    Picklist,
    Table,
} from 'react-rainbow-components';
import { CodeBlock } from '@rainbow-modules/content';

interface StyledHeaderContainerProps {
    hasTitle: boolean;
}

export const StyledHeaderContainer = styled.div<StyledHeaderContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.hasTitle ? '' : 'right')};
`;

export const StyledHeaderText = styled.h1`
    font-size: 1.6em;
    flex-grow: 1;
`;

export const StyledFilterMultiSelect = styled(MultiSelect)`
    max-width: 250px;
    margin: 0 0.2rem;
    flex-shrink: 1;
`;

export const StyledFilterPicklist = styled(Picklist)`
    max-width: 250px;
    margin: 0 0.2rem;
    flex-shrink: 1;
`;

export const StyledFilterButton = styled(Button)`
    margin: 0 0.2rem;
`;

export const StyledFilterButtonIcon = styled(ButtonIcon)`
    margin: 0 0.2rem;
`;

export const StyledTable = styled(Table)`
    width: 100%;
`;

export const StyledSeverityContainer = styled.div<{ severity?: string }>`
    display: flex;
    align-items: center;
    height: 100%;

    ${(props) => props.severity === 'info' && `color: ${props.theme.rainbow.palette.brand.main}`};
    ${(props) =>
        props.severity === 'warning' && `color: ${props.theme.rainbow.palette.warning.main}`};
    ${(props) => props.severity === 'error' && `color: ${props.theme.rainbow.palette.error.main}`};
`;

export const StyledFilterIcon = styled(BadgeOverlay)`
    margin-right: 0.5rem;
`;

export const StyledSummaryContainer = styled.div`
    margin: 0 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    padding: 0 10px 0 0;
`;

export const StyledSummaryButton = styled(ButtonIcon)`
    margin: 0 0.5rem 0 0;
`;

export const StyledCellText = styled.span`
    margin: 0 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

export const StyledCodeBlock = styled(CodeBlock)`
    line-height: 1.2em;
    margin-bottom: 0.5rem;
`;

export const StyledSeverityLabel = styled.span`
    line-height: 18px;
`;

export const StyledListIcon = styled(List)`
    width: 50px;
    height: 50px;
`;
