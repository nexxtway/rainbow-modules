import React, { useState } from 'react';
import { RenderIf } from 'react-rainbow-components';
import { ChevronRight, ChevronDown } from '@rainbow-modules/icons';
import {
    StyledCodeBlock,
    StyledCellText,
    StyledSummaryButton,
    StyledSummaryContainer,
} from './styled';
import { getFormattedCode } from './helpers';
import SummaryLabels from './summaryLabels';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Summary = (props: Record<string, any>): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { value, row } = props;

    const toggle = () => setIsExpanded(!isExpanded);

    const icon = isExpanded ? <ChevronDown /> : <ChevronRight />;

    return (
        <StyledSummaryContainer>
            <StyledSummaryButton size="small" icon={icon} onClick={toggle} />
            <SummaryLabels labels={row.labels} />
            <StyledCellText title={value}>{value}</StyledCellText>
            <RenderIf isTrue={isExpanded}>
                <StyledCodeBlock
                    value={getFormattedCode(row)}
                    language="json"
                    theme="dark"
                    hideHeader
                />
            </RenderIf>
        </StyledSummaryContainer>
    );
};

export default Summary;
