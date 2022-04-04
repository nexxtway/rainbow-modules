import React, { useState } from 'react';
import { Badge, RenderIf } from 'react-rainbow-components';
import { ChevronRight, ChevronDown } from '@rainbow-modules/icons';
import {
    StyledCodeBlock,
    StyledCellText,
    StyledSummaryButton,
    StyledSummaryContainer,
} from './styled';
import { getFormattedCode } from './helpers';

type LabelsProps = { labels: Record<string, string> };

const SummaryLabels = ({ labels }: LabelsProps) => {
    return (
        <>
            {Object.keys(labels).map((name) => (
                <Badge label={labels[name]} size="small" />
            ))}
        </>
    );
};

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
            <StyledCellText>{value}</StyledCellText>
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
